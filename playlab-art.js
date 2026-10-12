(function(){
  'use strict';
  let artwork=null;
  const colors={red:['#b91c1c','#ef4444','#fca5a5','#ffe4e6'],blue:['#1d4ed8','#3b82f6','#93c5fd','#dbeafe'],green:['#166534','#22c55e','#86efac','#dcfce7']};
  function design(color){
    const palette=colors[color];
    if(!palette)throw new Error('Unknown art color');
    let shapes='';
    for(let i=0;i<42;i++){
      const x=Math.round(Math.random()*800),y=Math.round(Math.random()*520),size=12+Math.round(Math.random()*65),fill=palette[Math.floor(Math.random()*palette.length)];
      const kind=Math.floor(Math.random()*3);
      shapes+=kind===0?`<circle cx="${x}" cy="${y}" r="${size}" fill="${fill}" opacity=".8"/>`:kind===1?`<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="8" fill="${fill}" transform="rotate(${Math.round(Math.random()*180)} ${x} ${y})" opacity=".8"/>`:`<path d="M${x} ${y-size}l${size} ${size*2}h${-size*2}z" fill="${fill}" opacity=".8"/>`;
    }
    return shapes;
  }
  function render(root,language){
    const hi=language==='hi',t=(en,hindi)=>hi?hindi:en;
    document.title=t('Color Pop Studio · PlayLab','रंग धमाल स्टूडियो · PlayLab');
    root.innerHTML=`<a class="button" href="#">${t('All labs','सभी प्रयोगशालाएँ')}</a><section class="hero art-hero"><p class="eyebrow">${t('Design Lab','डिज़ाइन प्रयोगशाला')}</p><h1 tabindex="-1">${t('Color Pop Studio','रंग धमाल स्टूडियो')}</h1><p>${t('Three buttons. Endless surprises! Pick a color to create a random mix of circles, squares and triangles.','तीन बटन, ढेर सारे मज़ेदार डिज़ाइन! वृत्त, वर्ग और त्रिकोण का नया मिश्रण बनाने के लिए एक रंग चुनें।')}</p></section><section class="card art-panel"><div class="row art-buttons" aria-label="${t('Choose your art color','अपने डिज़ाइन का रंग चुनें')}">${['red','blue','green'].map((color,i)=>`<button type="button" class="art-${color}" data-art-color="${color}" aria-pressed="${artwork?.color===color}">${t(['Red','Blue','Green'][i],['लाल','नीला','हरा'][i])}</button>`).join('')}</div><figure class="art-frame"><svg id="art-picture" viewBox="0 0 800 520" role="img" aria-label="${t('Random geometric art','आकृतियों से बना यादृच्छिक डिज़ाइन')}"><rect width="800" height="520" fill="#fffaf0"/><g id="art-shapes">${artwork?.shapes||''}</g></svg><figcaption id="art-status" role="status" aria-live="polite">${t(artwork?'Your design is ready. Press any color again for a new surprise.':'Press a color to make your first design.',artwork?'आपका डिज़ाइन तैयार है। नया डिज़ाइन बनाने के लिए कोई रंग फिर दबाएँ।':'पहला डिज़ाइन बनाने के लिए कोई रंग दबाएँ।')}</figcaption></figure><div class="lesson"><strong>${t('Try it: same button, different result','करके देखें: वही बटन, अलग परिणाम')}</strong><p>${t('Press Red twice. The color family stays red, but the shapes, sizes and positions change. Like arranging colored paper for a school celebration, many designs can use the same colors.','लाल बटन दो बार दबाएँ। रंग लाल ही रहता है, लेकिन आकृतियाँ, आकार और जगह बदलते हैं। स्कूल के उत्सव में रंगीन कागज़ सजाने की तरह, उन्हीं रंगों से कई डिज़ाइन बन सकते हैं।')}</p></div></section>`;
    root.querySelectorAll('[data-art-color]').forEach(button=>button.addEventListener('click',()=>{
      const color=button.dataset.artColor;artwork={color,shapes:design(color)};
      root.querySelector('#art-shapes').innerHTML=artwork.shapes;
      root.querySelectorAll('[data-art-color]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      const label=button.textContent;
      root.querySelector('#art-picture').setAttribute('aria-label',t(`${label} geometric art with 42 random shapes`,`${label} रंग में 42 यादृच्छिक आकृतियों वाला डिज़ाइन`));
      root.querySelector('#art-status').textContent=t(`${label} surprise created! Press again to remix.`,`${label} डिज़ाइन तैयार! नया मिश्रण बनाने के लिए फिर दबाएँ।`);
    }));
  }
  window.PlayLabArt={render,design};
})();
