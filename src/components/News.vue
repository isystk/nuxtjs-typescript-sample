<template>
  <article class="detail" >
    <div class="entry-content" >
      <h2>ざわざわした後に何かが起こります。</h2>
    
      <h4>デモ</h4>
      <a href="javascript:(function(){var%20s=document.createElement('scr'+'ipt');s.charset='UTF-8';s.language='javascr'+'ipt';s.type='text/javascr'+'ipt';var%20d=new%20Date;s.src='./js/kaiji.js?u='+escape(document.location.href)+'&amp;d='+d.getMilliseconds();document.body.appendChild(s);})();">ここをクリックしてみてね</a>
      <p>↑ このリンクをツールバーにドラックするとブックマークレットになります。</p>

      <p>以下のスクリプトをご利用のブログに設置して下さい。</p>
      <pre class="prettyprint linenums"><code>&lt;script type=&quot;text/javascript&quot;&gt;
(function(){var s=document.createElement(&#039;scr&#039;+&#039;ipt&#039;);s.charset=&#039;UTF-8&#039;;s.language=&#039;javascr&#039;+&#039;ipt&#039;;s.type=&#039;text/javascr&#039;+&#039;ipt&#039;;var d=new Date;s.src=&#039;https://demo.isystk.com/kaiji/js/kaiji.js?u=&#039;+escape(document.location.href)+&#039;&amp;d=&#039;+d.getMilliseconds();document.body.appendChild(s);})();
&lt;/script&gt;
      </code></pre>
    </div>
    <div class="clearfix"></div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class News extends Vue {
  news = this.$store.state.news;
}
</script>

