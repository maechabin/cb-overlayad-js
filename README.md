# jQuery.cbMobileAdStyle.js

##＜概要＞
スマートフォン向けのサイトにバナー広告を表示させる際に、スマホ特有の表示の実装を容易にするjQueryプラグイン。

以下の広告表示スタイルに対応

  - オーバーレイ（サイトの上部、下部に固定表示）
  - インタースティシャル（アクションが起きた後の、全画面表示）
  - レスポンシブ（画面サイズに合わせて、アスペクト比を維持したまま伸縮表示）
  - 高解像度（Retinaディスプレイに対応、画像を縦横サイズ1/2で表示）
  - トリミング（画面サイズが変更されても、サイズと中央配置を維持したまま表示）
  - バックグランド（バナーの両端に空いたスペースを背景色で埋めて表示）
  - ランダム（複数の画像をブラウザーをリロードするたびにランダム表示）

使い方は以下の通り。スタイルを適用させたいバナー広告の要素に対して、メソッドを実行。以下のようにメソッドチェーンして複数のスタイルを適用させることも可能。
```js
$(".selector").cbInterstitial().cbRetina().cbResponsive();
```

##<実装の準備>

###1. 外部ファイルを読み込む
当プラグインのcssファイル、jQuery、当プラグインのjsファイルをページに読み込みます。
```html
<link rel="stylesheet" href="cbmobileadstyle.css">
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.cbmobileadstyle.min.js"></script>
```

###2. バナー広告の実装-基本スタイル

  - バナー広告のclass属性に「cb-adstyle」という値を指定。
  - バナー広告の親要素に任意のselector値を指定。

```html
<!-- 広告がimgタグの場合 -->
<div class="selector">
  <a href="バナー広告の飛び先のURL"><img src="バナー広告のパス" class="cb-adstyle"></a>
</div>
```

```html
<!-- 広告がscriptタグの場合 -->
<div class="selector">
  <div class="cb-adstyle">
    <script src="広告表示用のjsファイルのパス"></script>
  </div>
</div>
```

##<スマホ広告の各スタイル実装方法>

###1. オーバーレイ Overlay

サイトの上部または下部に固定表示させる広告表示スタイル。画面をスクロールしても常に表示され続けるため、クリック率が高くなります。320×50のバナーを使って実装するのが一般的です。

[→オーバーレイのサンプル](http://jsrun.it/maechabin/fO2S)

```js
$(".selector").cbOverlay();
```

####オプション

デフォルトでは画面下部に固定表示されるようになっていますが、以下のようにオプションを設定すると、画面上部に固定表示させることができます。

```js
$(".selector").cbOverlay({
  "position": "top"
});
```

###2. インタースティシャル（全画面 / ライトボックス） Interstitial

ゲームでのクリア時やWebサイトでのページ遷移時など何かアクションが発生した際に表示させる広告スタイル。全画面いっぱいに表示させるのが一般的です。当プラグインも全画面表示に対応しています。

[→インタースティシャルのサンプル](http://jsrun.it/maechabin/awaV)

```js
$(".selector").cbInterstitial();
```


###3. レスポンシブ Responsive

画面サイズに合わせてバナー広告のサイズもアスペクト比を維持しながら伸縮させて表示させる広告スタイル。

[→レスポンシブのサンプル](http://jsrun.it/maechabin/yjvd)

```js
$(".selector").cbResponsive();
```


###4. 高解像度 Retina

高精細なスマートフォンのディスプレイに対応させる表示スタイル。こちらのスタイルを適用させる場合は、表示サイズの縦横それぞれ倍のサイズのバナー広告を用意します。また、img要素内にサイズの指定もしないでください。

[→高解像度のサンプル](http://jsrun.it/maechabin/r3ic)

```js
$(".selector").cbRetina();
```

###5. トリミング Triming

画面サイズが変更されても、サイズと中央配置を維持したまま表示させる広告スタイル。
現在のスマートフォンの画面サイズは大型化してきており、幅320pxのバナーを中央配置しても左右にスペースが入ってしまう場合があります。320pxよりも幅の大きいバナー広告を用意し、こちらのスタイルを適用させることが解決方法の一つとなります。

[→トリミングのサンプル](http://jsrun.it/maechabin/yJdT)

```js
$(".selector").cbTriming();
```

###6. バックグランド Background

バナーの両端のスペースを背景色で埋める広告スタイル。オーバーレイと一緒に使うことをお勧めします。
スマートフォンのディスプレイサイズは機種によってさまざまであり、バナーをディスプレイの幅にぴったり合わせて表示させるのは困難になってきています。両端にできたスペースを背景色で埋め、クリック領域を広げます。

[→バックグランドのサンプル](http://jsrun.it/maechabin/4Pthv)

```js
$(".selector").cbBackground();
```

####オプション

以下のように背景色を任意の色で指定することができます。指定できる値は、CSSのbackground-colorプロパティに指定できる値となります。
```js
$(".selector").cbBackground({
  "bgcolor": "#aaa"
});
```

###7. ランダム Random

複数のバナー広告を、ページを表示するたびにランダム表示させる広告スタイル。こちらのスタイルを使用する場合は、必ずランダム表示させたいバナー広告をオプションに指定させます。

[→ランダムのサンプル](http://jsrun.it/maechabin/rQit)

```js
$(".selector").cbRandom({

  ad: [
    {
      url: "バナー広告の飛び先URL 1",
      image: "バナー広告のパス 1"
    },

    {
      url: "バナー広告の飛び先URL 2",
      image: "バナー広告のパス 2"
    }

  ]

});
```

##<注意点>

上記のメソッドをメソッドチェーンでひとつのバナー広告に対して複数のスタイルを適用させることも可能です。

以下の例は、インタースティシャル広告に高解像度とレスポンシブを適用させた広告スタイルとなります。
```js
$(".selector").cbInterstitial().cbRetina().cbResponsive();
```

[→表示サンプル](http://jsrun.it/maechabin/hv4Z)

※ただし、以下のメソッドの組み合わせはお控えください。

- .cbOverlay()と.cbInterstitial()
- .cbResponsive()と.cbTriming()
- .cbInterstitial()と.cbBackground()

##<デモ>

[http://jsrun.it/maechabin/gvZm](http://jsrun.it/maechabin/gvZm)


##<ライセンス>

MIT license

##<アップデート情報>

###ver. 1.1.0
- バックグランド広告表示対応
