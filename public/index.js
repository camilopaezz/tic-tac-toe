(()=>{var w=()=>`
  <div class="playground__container playground__container--draw">
    <span class="draw__emoji">\u{1F615}</span>
    <p class="draw__text">Draw</p>
  </div>
`,m=w;var b=n=>n===1?"assets/Group1.png":"assets/Ellipse1.png",l=b;var f=class{static addTurn(s){return s.turn++}static defineTurn(s){if(s.turn%2==0)return 1;if(s.turn%2!=0)return 2}},i=f;var T=(n,s)=>{let e=i.defineTurn(s),t=l(e);n.style["background-image"]||(n.style["background-image"]=`url(${t})`,n.style["background-repeat"]="no-repeat",n.style["background-position"]="center")},g=T;var x=()=>`
  <div class="row row1">
    <div class="playground__space space1" tabindex="1"></div>
    <div class="playground__space space2" tabindex="2"></div>
    <div class="playground__space space3" tabindex="3"></div>
  </div>
    <div class="row row2">
      <div class="playground__space space4" tabindex="4"></div>
      <div class="playground__space space5" tabindex="5"></div>
      <div class="playground__space space6" tabindex="6"></div>
    </div>
    <div class="row row3">
      <div class="playground__space space7" tabindex="7"></div>
      <div class="playground__space space8" tabindex="8"></div>
      <div class="playground__space space9" tabindex="9"></div>
    </div>`,y=x;var a=class{constructor(){this.scores=new Array(2).fill(0),this.turn=0}static getInstance(){return this.instance?this.instance:(this.instance=new a,this.instance)}seeAWinner(s,e,t){let p=document.querySelector(`.space${s}`),c=document.querySelector(`.space${e}`),u=document.querySelector(`.space${t}`);p.style["background-image"]&&c.style["background-image"]&&u.style["background-image"]&&p.style["background-image"]===c.style["background-image"]&&c.style["background-image"]===u.style["background-image"]&&console.log("winner, no se quien pero winner")}checkWinner(s){let e=parseInt(s.classList.toString().split(" ")[1].replace("space",""));e===1||e===4||e===7?this.seeAWinner(e,e+1,e+2):(e===3||e===6||e===9)&&this.seeAWinner(e,e-1,e-2),e===1||e===2||e===3?this.seeAWinner(e,e+3,e+6):(e===7||e===8||e===9)&&this.seeAWinner(e,e-3,e-6),e===1||e===2||e===3?this.seeAWinner(e,e+3,e+6):(e===7||e===8||e===9)&&this.seeAWinner(e,e-3,e-6),e===1?this.seeAWinner(e,e+4,e+8):e===5?this.seeAWinner(e,e-4,e+4):e===9&&this.seeAWinner(e,e-4,e-8),e===3?this.seeAWinner(e,e+2,e+4):e===5?this.seeAWinner(e,e-2,e+2):e===7&&this.seeAWinner(e,e-2,e-4)}},r=a;var v=class{static addListeners(...s){console.log("im here"),console.log(this),s.forEach(e=>{e.element.addEventListener(e.type,this.handler.bind(r.getInstance()))})}static removeListeners(...s){s.forEach(e=>{e.element.removeEventListener(e.type,this.handler.bind(r.getInstance()))})}static handler(s){(s.type==="click"||s.key==="Enter")&&(g(s.target,this),i.addTurn(this),this.turn===9&&_.draw(y(),this))}},o=v;var h=class{static draw(s,e){let t=document.querySelector(".playground__container");o.removeListeners({element:t,type:"click"},{element:t,type:"keydown"}),t.innerHTML=m(),setTimeout(()=>t.innerHTML=s,2e3)}static win(s,e){e.scores[s-1]++}},_=h;var d=document.querySelector(".playground__container"),ee=d.innerHTML,k=r.getInstance();console.log(k);o.addListeners({element:d,type:"click"},{element:d,type:"keydown"});})();
//# sourceMappingURL=index.js.map
