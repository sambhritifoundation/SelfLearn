/* Dedicated English tracks; existing integrated lessons and quiz progress stay intact. */
window.EnglishPractice = (() => {
  const lessons = window.SL_ENGLISH_PRACTICE;
  const titles = {listening:'Listening Lessons & Practice', speaking:'Speaking Practice'};
  let recorder = null, stream = null, recordingUrl = null, recordingToken = 0;
  const e = value => esc(String(value));
  const tr = (en, hi) => LANG === 'hi' ? hi : en;
  const key = () => PK('sl_english_tracks_v1');
  function read() { try { const p=JSON.parse(localStorage.getItem(key()) || '{}'); return p && typeof p==='object' && !Array.isArray(p) ? p : {}; } catch (_) { return {}; } }
  function state(track, i) { return read()[track+':'+i] || {}; }
  function save(track, i, patch) {
    const p=read(); p[track+':'+i]=Object.assign({},p[track+':'+i]||{},patch);
    try { localStorage.setItem(key(),JSON.stringify(p)); return true; }
    catch (_) { toast(tr('Your browser could not save progress. You can still practise.','प्रगति सेव नहीं हुई। अभ्यास जारी रख सकते हैं।')); return false; }
  }
  function cleanup() {
    recordingToken++;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    if (recorder && recorder.state!=='inactive') recorder.stop();
    if (stream) stream.getTracks().forEach(t=>t.stop());
    recorder=null; stream=null;
    if(recordingUrl) URL.revokeObjectURL(recordingUrl);
    recordingUrl=null;
  }
  function open(track, lesson) { go('englishPractice',{track,lesson}); }
  function cards() {
    return `<section class="ep-choices" aria-label="English practice sections">${Object.keys(titles).map(track=>`<div class="card"><span class="chip">${track==='listening'?'🎧':'🗣️'} ${tr('12 progressive lessons','12 क्रमिक पाठ')}</span><h2>${titles[track]}</h2><p>${track==='listening'?tr('Hear everyday English, catch details and grow into a confident listener.','रोज़मर्रा की अंग्रेज़ी सुनें, विवरण समझें और आत्मविश्वास बढ़ाएँ।'):tr('Build from a few words to stories, opinions and confident conversations.','कुछ शब्दों से शुरू करके कहानी, राय और सहज बातचीत तक बढ़ें।')}</p><button class="btn" onclick="EnglishPractice.open('${track}')">${tr('Choose this section','यह भाग चुनें')} →</button></div>`).join('')}</section>`;
  }
  function view(track, index) {
    if(!titles[track]) return '<p>Choose an English practice section.</p>'+cards();
    const intro=track==='listening'
      ? tr('Practise understanding the main idea, useful details and what a speaker implies. Start with a few clear sentences and progress to longer messages and nuanced discussions. In every lesson: listen without the transcript, answer three checks, replay the evidence, then retell the message.','मुख्य बात, ज़रूरी विवरण और वक्ता का आशय समझने का अभ्यास करें। छोटे वाक्यों से लंबी बातचीत तक बढ़ें। हर पाठ में पहले सुनें, तीन सवाल हल करें, फिर सुनकर जाँचें और अपने शब्दों में दोहराएँ।')
      : tr('Practise speaking aloud, responding to a partner and saying the same idea in your own words. Start with sentence frames, then build toward sustained, flexible conversations. In every lesson: plan, speak, handle a follow-up, compare with a model and try again.','ज़ोर से बोलने, साथी को जवाब देने और अपने शब्दों में बात कहने का अभ्यास करें। वाक्य के सहारे शुरू करके सहज बातचीत तक बढ़ें। हर पाठ में तैयारी करें, बोलें, अगला सवाल लें, नमूने से तुलना करें और फिर कोशिश करें।');
    const count=lessons.filter((_,i)=>state(track,i).done).length;
    let h=`<div class="ep"><div class="crumb"><button class="btn ghost sm" onclick="go('subject',{code:'ENGCOM'})">← ${tr('English Communication','अंग्रेज़ी संप्रेषण')}</button></div><h1>${track==='listening'?'🎧':'🗣️'} ${titles[track]}</h1><section class="card ep-summary"><h2>${tr('Your practice journey','आपका अभ्यास सफर')}</h2><p>${intro}</p><p>${tr('Move on when the task feels manageable without the model. Repeat whenever you need; every lesson is open. Levels are practice milestones, not a fluency certificate.','जब नमूने के बिना सहज लगे, आगे बढ़ें। ज़रूरत पर दोहराएँ; सभी पाठ खुले हैं। स्तर अभ्यास के पड़ाव हैं, प्रमाणपत्र नहीं।')}</p><div class="sub">${count}/12 ${tr('lessons completed • saved for this learner on this browser','पाठ पूरे • इस विद्यार्थी के लिए इसी ब्राउज़र में सेव')}</div></section>`;
    if(!Number.isInteger(index)||!lessons[index]) {
      h+=`<div class="ep-grid">${lessons.map((l,i)=>`<button class="card ep-lesson" onclick="EnglishPractice.open('${track}',${i})"><span class="chip">${i+1} · ${e(l.level)}</span><h2>${e(tr(l.title,l.hi))}</h2><p>${e(l.focus)}</p><strong>${state(track,i).done?'✓ '+tr('Completed · practise again','पूरा · फिर अभ्यास करें'):tr('Start lesson','पाठ शुरू करें')} →</strong></button>`).join('')}</div></div>`;
      return h;
    }
    const l=lessons[index], s=state(track,index), action=`'${track}',${index}`;
    h+=`<button class="btn ghost sm" onclick="EnglishPractice.open('${track}')">← ${tr('All 12 lessons','सभी 12 पाठ')}</button><section class="card ep-task"><div class="chip">${index+1}/12 · ${e(l.level)}</div><h2 tabindex="-1" id="ep-title">${e(tr(l.title,l.hi))}</h2><p>${e(l.focus)}</p>`;
    if(track==='listening') {
      h+=`<h3>1. ${tr('Listen for the big picture','मुख्य बात सुनें')}</h3><p>${tr('Listen once without reading. Who is speaking, and why? Listen again for details. Use slow playback when helpful; return to normal speed as you grow confident.','पहली बार बिना पढ़े सुनें। कौन बोल रहा है और क्यों? फिर विवरण सुनें। ज़रूरत पर धीमे सुनें, फिर सामान्य गति पर लौटें।')}</p><div class="ep-controls"><button class="btn" onclick="EnglishPractice.play(${index},1)">▶ ${tr('Listen','सुनें')}</button><button class="btn ghost" onclick="EnglishPractice.play(${index},0.75)">🐢 ${tr('Slow','धीरे')}</button><button class="btn ghost" onclick="EnglishPractice.stop()">■ ${tr('Stop','रोकें')}</button></div><p class="sub">${tr('Device-generated English audio. Voice quality varies by device. If audio is unavailable, ask someone to read the transcript aloud; reading it yourself is supported practice, not an unaided listening attempt.','डिवाइस की आवाज़ में अंग्रेज़ी। आवाज़ उपलब्ध न हो तो किसी से नीचे का पाठ पढ़वाएँ। स्वयं पढ़ना सहारे वाला अभ्यास है।')}</p><p id="ep-audio-status" role="status"></p><details><summary>${tr('Reveal transcript / reading support','बातचीत पढ़ें / पढ़ने का सहारा')}</summary><p>${e(l.audio)}</p></details><h3>2. ${tr('Check what you heard','जो सुना उसे जाँचें')}</h3>${l.checks.map((q,j)=>`<fieldset><legend>${j+1}. ${e(q[0])}</legend>${q[1].map((option,k)=>`<label class="ep-option"><input type="radio" name="ep-q${j}" value="${k}"> ${e(option)}</label>`).join('')}<p id="ep-feedback-${j}" role="status"></p></fieldset>`).join('')}<button class="btn" onclick="EnglishPractice.check(${index})">${tr('Check my understanding','मेरी समझ जाँचें')}</button><p id="ep-result" role="status"></p><h3>3. ${tr('Notice, replay, retell','ध्यान दें, फिर सुनें, दोहराएँ')}</h3><p>${e(l.notice)}</p><p>${tr('Replay the parts you missed. Close the transcript and say the main message in your own words; keep any time, condition or uncertainty.','छूटे हुए हिस्से फिर सुनें। पाठ बंद करके अपने शब्दों में मुख्य बात कहें; समय, शर्त और अनिश्चितता बनाए रखें।')}</p><details><summary>${tr('A model summary to compare with','तुलना के लिए मुख्य बात')}</summary><p>${e(l.checks[0][3])} ${e(l.checks[1][3])} ${e(l.checks[2][3])}</p></details><label class="ep-option"><input id="ep-retold" type="checkbox" ${s.retold?'checked':''} onchange="EnglishPractice.remember(${action},'retold',this.checked)"> ${tr('I replayed difficult parts and retold the message.','मैंने कठिन भाग फिर सुनकर बात अपने शब्दों में दोहराई।')}</label>`;
    } else {
      h+=`<h3>1. ${tr('Prepare, then speak aloud','तैयारी करें, फिर ज़ोर से बोलें')}</h3><p>${e(l.prompt)}</p><details ${index<4?'open':''}><summary>${tr('A sentence frame if you need it','ज़रूरत हो तो वाक्य का सहारा')}</summary><p>${e(l.frame)}</p></details><label for="ep-draft">${tr('Optional planning notes — use a few words, then look away and speak.','तैयारी के नोट्स — कुछ शब्द लिखें, फिर बिना देखे बोलें।')}</label><textarea id="ep-draft" rows="3" maxlength="3000" oninput="EnglishPractice.remember(${action},'draft',this.value)">${e(s.draft||'')}</textarea><p>${tr('Try aloud before opening the model. Pause, restart and correct yourself whenever you need.','नमूना खोलने से पहले बोलें। रुकना, फिर शुरू करना और सुधारना ठीक है।')}</p><div class="ep-controls"><button class="btn ghost" id="ep-record" onclick="EnglishPractice.record()">🎙 ${tr('Record myself (optional)','अपनी आवाज़ रिकॉर्ड करें (वैकल्पिक)')}</button><button class="btn ghost" id="ep-record-stop" onclick="EnglishPractice.endRecording()" disabled>${tr('Stop recording','रिकॉर्डिंग रोकें')}</button></div><p class="sub">${tr('Recording stays in this page and is discarded when you leave. No upload or automatic pronunciation score. You can practise fully without a microphone.','रिकॉर्डिंग इसी पेज पर रहती है और पेज छोड़ने पर हटती है। कोई अपलोड या स्वचालित उच्चारण अंक नहीं। बिना माइक भी पूरा अभ्यास कर सकते हैं।')}</p><p id="ep-record-status" role="status"></p><audio id="ep-recording" controls hidden></audio><h3>2. ${tr('Take another turn','बातचीत आगे बढ़ाएँ')}</h3><p>${e(l.follow)}</p><p>${tr('Answer aloud before opening the suggested response. Many different answers can work.','सुझाव खोलने से पहले ज़ोर से जवाब दें। कई अलग उत्तर सही हो सकते हैं।')}</p><details><summary>${tr('Suggested response','सुझाया गया जवाब')}</summary><p>${e(l.reply)}</p></details><h3>3. ${tr('Compare, adjust and try again','तुलना करें, सुधारें और फिर बोलें')}</h3><details><summary>${tr('Show a model — not a script to memorize','नमूना देखें — रटने के लिए नहीं')}</summary><p>${e(l.model)}</p></details><p><strong>${tr('Language in action:','इस्तेमाल में भाषा:')}</strong> ${e(l.notice)}</p><p>${tr('Listen to your recording or recall your attempt. Check each statement honestly. If one is difficult, use the model to repair that part and speak again. These are your own reflections, not an automated assessment.','रिकॉर्डिंग सुनें या अपनी कोशिश याद करें। हर बात ईमानदारी से जाँचें। कठिन भाग नमूने की मदद से सुधारकर फिर बोलें। यह आत्म-जाँच है, स्वचालित मूल्यांकन नहीं।')}</p>${l.rubric.map((r,j)=>`<label class="ep-option"><input class="ep-rubric" type="checkbox" ${s['rubric'+j]?'checked':''} onchange="EnglishPractice.remember(${action},'rubric${j}',this.checked)"> ${e(r)}</label>`).join('')}<div class="ep-coach"><strong>${tr('Make it yours','अपने शब्दों में')}</strong><p>${e(l.transfer)}</p></div><label class="ep-option"><input id="ep-transfer" type="checkbox" ${s.transfer?'checked':''} onchange="EnglishPractice.remember(${action},'transfer',this.checked)"> ${tr('I tried the new situation aloud, including the follow-up.','मैंने नई स्थिति और अगले सवाल का ज़ोर से अभ्यास किया।')}</label>`;
    }
    h+=`<div class="ep-controls"><button class="btn" onclick="EnglishPractice.complete(${action})">${tr('Finish this practice','यह अभ्यास पूरा करें')}</button>${index<11?`<button class="btn ghost" onclick="EnglishPractice.open('${track}',${index+1})">${tr('Next lesson','अगला पाठ')} →</button>`:''}</div><p id="ep-completion" role="status">${s.done?tr('✓ You have completed this lesson. Revisiting is always welcome.','✓ आपने यह पाठ पूरा किया है। दोहराना हमेशा अच्छा है।'):''}</p></section></div>`;
    return h;
  }
  function play(i, rate) {
    const status=document.getElementById('ep-audio-status');
    if(!('speechSynthesis' in window)||!window.SpeechSynthesisUtterance) { status.textContent=tr('Audio is unavailable here. Use the transcript with a reading partner.','यहाँ आवाज़ उपलब्ध नहीं। साथी से पाठ पढ़वाएँ।'); return; }
    speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(lessons[i].audio); u.lang='en-IN'; u.rate=rate;
    const voices=speechSynthesis.getVoices(); const voice=voices.find(v=>/^en[-_]IN/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang)); if(voice)u.voice=voice;
    u.onstart=()=>status.textContent=tr('Playing…','चल रहा है…'); u.onend=()=>status.textContent=tr('Finished. Replay as often as you need.','पूरा हुआ। जितनी बार चाहें फिर सुनें।');
    u.onerror=()=>status.textContent=tr('Playback stopped or unavailable. Try again or use the transcript.','आवाज़ रुकी या उपलब्ध नहीं। फिर कोशिश करें या पाठ पढ़ें।');
    speechSynthesis.speak(u);
  }
  function check(i) {
    let correct=0, answered=0;
    lessons[i].checks.forEach((q,j)=>{
      const selected=document.querySelector(`input[name="ep-q${j}"]:checked`), out=document.getElementById('ep-feedback-'+j);
      if(!selected){out.textContent=tr('Choose an answer, then try again.','उत्तर चुनकर फिर कोशिश करें।');return;}
      answered++; const ok=Number(selected.value)===q[2]; if(ok)correct++;
      out.textContent=(ok?tr('Yes. ','सही। '):tr('Not yet. Listen again: ','अभी नहीं। फिर सुनें: '))+q[3];
      out.className=ok?'ep-correct':'ep-retry';
    });
    save('listening',i,{passed:answered===3&&correct===3});
    document.getElementById('ep-result').textContent=`${correct}/3. `+(correct===3?tr('You caught the meaning. Now replay and retell it.','आपने अर्थ समझा। अब दोहराएँ।'):tr('Take your time. Use the clues, replay and try again; there is no penalty.','आराम से करें। संकेत देखें, फिर सुनें और कोशिश करें; कोई दंड नहीं।'));
  }
  function complete(track,i) {
    const s=state(track,i), ready=track==='listening'?s.passed&&s.retold:s.rubric0&&s.rubric1&&s.rubric2&&s.transfer;
    const out=document.getElementById('ep-completion');
    if(!ready){out.textContent=track==='listening'?tr('First get all three checks right and tick the replay-and-retell step. You can always revisit a clue.','पहले तीनों उत्तर सही करें और दोहराने का चरण पूरा करें।'):tr('Try the speaking tasks and tick all four reflections when ready. Use the model for any part that needs another attempt.','बोलने के काम करें और तैयार होने पर चारों बातें जाँचें। कठिन भाग में नमूना देखें।');return;}
    if(save(track,i,{done:true}))out.textContent=tr('✓ Practice saved. Well done for trying again. Continue when you feel ready.','✓ अभ्यास सेव हुआ। दोबारा कोशिश अच्छी रही। तैयार हों तो आगे बढ़ें।');
  }
  async function record() {
    const status=document.getElementById('ep-record-status'), button=document.getElementById('ep-record');
    if(!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder){status.textContent=tr('Recording is unavailable in this browser. Speak aloud and use the self-checks.','यहाँ रिकॉर्डिंग उपलब्ध नहीं। ज़ोर से बोलें और आत्म-जाँच करें।');return;}
    button.disabled=true; const token=++recordingToken;
    status.textContent=tr('Waiting for microphone permission…','माइक की अनुमति की प्रतीक्षा…');
    try {
      const acquired=await navigator.mediaDevices.getUserMedia({audio:true});
      if(token!==recordingToken){acquired.getTracks().forEach(t=>t.stop());return;}
      stream=acquired; const chunks=[]; recorder=new MediaRecorder(stream);
      recorder.ondataavailable=ev=>{if(ev.data.size)chunks.push(ev.data);};
      recorder.onstop=()=>{
        acquired.getTracks().forEach(t=>t.stop());
        if(token!==recordingToken)return;
        if(recordingUrl)URL.revokeObjectURL(recordingUrl);
        recordingUrl=URL.createObjectURL(new Blob(chunks,{type:chunks[0]?.type||'audio/webm'}));
        const audio=document.getElementById('ep-recording');audio.src=recordingUrl;audio.hidden=false;
        status.textContent=tr('Listen back. Choose one thing to improve and try again.','फिर सुनें। एक बात सुधारें और दोबारा कोशिश करें।');
        button.disabled=false;document.getElementById('ep-record-stop').disabled=true;
      };
      recorder.start();document.getElementById('ep-record-stop').disabled=false;
      status.textContent=tr('Recording locally. Press Stop recording when finished.','यहीं रिकॉर्ड हो रहा है। पूरा होने पर रोकें।');
    } catch (_) {
      if(token!==recordingToken)return;
      if(stream)stream.getTracks().forEach(t=>t.stop());
      button.disabled=false;status.textContent=tr('Microphone access was unavailable. You can still speak aloud and complete every task.','माइक उपलब्ध नहीं। फिर भी बोलकर सभी काम पूरे करें।');
    }
  }
  return {cards,view,open,cleanup,play,check,complete,record,remember:saveField,stop:()=>{if('speechSynthesis' in window)speechSynthesis.cancel();},endRecording:()=>{if(recorder?.state==='recording')recorder.stop();}};
  function saveField(track,i,field,value){save(track,i,{[field]:value});}
})();
window.addEventListener('pagehide',()=>EnglishPractice.cleanup());
