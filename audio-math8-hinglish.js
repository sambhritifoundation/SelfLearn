/* Hindi audio uses the same Devanagari narration and shared voice player
   as MTH11-7-1 (Pascal's Triangle). Filename retained for static entry points. */
(function(){
  'use strict';
  var course=window.SL_DATA.subjects.find(function(s){return s.code==='MATH8';});
  var titles=[
    ['आँगन में टाइलें लगाइए','वर्ग का मतलब समझिए','पहले अंदाज़ा लगाइए','जगह और सीमा का अंतर'],
    ['कोने की टाइल मत भूलिए','छोटे square से जाँचिए','संकेत प्रमाण नहीं है','बीच की संख्याएँ गिनिए'],
    ['उल्टा सवाल पूछिए','दो से भाग नहीं देना है','चिन्ह का मतलब समझिए','अपने उत्तर की जाँच'],
    ['बराबर जोड़ी बनाइए','हर जोड़ी से एक चुनिए','अकेला factor खोजिए','उसका साथी पूरा कीजिए'],
    ['बगीचे की लंबाई का अंदाज़ा','गलत उत्तर कैसे पकड़ें','और पास पहुँचिए','अंदाज़ा और सही मान'],
    ['अंकों की जोड़ी बनाइए','पहला अंक खोजिए','अगला अंक आज़माइए','तरीका काम क्यों करता है'],
    ['एक परत से पूरा cube','तीनों दिशाएँ गिनिए','लंबाई दोगुनी करने पर','इकाई और ऋण संख्या'],
    ['बराबर किनारा खोजिए','तीन का समूह बनाइए','जोड़ी और समूह का अंतर','गुणा करके जाँचिए'],
    ['अधूरा समूह पूरा कीजिए','सिर्फ कमी पूरी करनी है','भाग देने पर क्या बदलता है','जोड़ना और गुणा अलग हैं'],
    ['बगीचा और छोटा model','बाड़ की लंबाई खोजिए','डिब्बे का किनारा खोजिए','खर्च और शर्तें बताइए']
  ];
  course.chapters[0].topics.forEach(function(tp,i){
    var spoken=tp.audio.hi
      .replace(/-by-/g,' गुणा ')
      .replace(/छह twos/g,'छह दो')
      .replace(/Twos का समूह/g,'दो का समूह')
      .replace(/Threes का triple/g,'तीन का triple')
      .replace(/दोनों threes/g,'दोनों तीन')
      .replace(/square metre/g,'वर्ग मीटर')
      .replace(/cubic centimetre/g,'घन सेंटीमीटर')
      .replace(/centimetre/g,'सेंटीमीटर')
      .replace(/metre/g,'मीटर')
      .replace(/square units/g,'वर्ग इकाइयों')
      .replace(/cubic units/g,'घन इकाइयों');
    tp.audio.hi=spoken.split(/\n\s*\n/).map(function(s,j){return {t:titles[i][j],s:s};});
  });
}());
