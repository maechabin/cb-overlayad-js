# jquery-overlayad-js

バナー広告をページの下部または上部に`「固定（オーバーレイ）表示」`させるためのjQueryプラグイン。

## About

サイトの上部または下部に固定表示させる広告表示スタイル。画面をスクロールしても常に表示され続けるため、クリック率が高くなります。320×50のバナーを使って実装するのが一般的です。

## Demo

## Download

こちらのページから[ダウンロード](https://github.com/maechabin/jquery-overlayad-js/archive/master.zip)するか、`[git clone]`コマンドでローカルにコピーします。

```
$ git clone git@github.com:maechabin/jquery-overlayad-js.git 任意のディレクトリ名
```

機能の実装に使用するファイルは以下のjsファイルとなります。
- ./dist/jquery.overlayad.js


## Usage

### 1. jQueryと当プラグインの読み込み

jQuery本体とdistディレクトリ内の「jquery.overlayad.js」をページに読み込みます。

```html
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="./dist/jquery.overlayad.js"></script>
```

### 2. オーバーレイ広告を表示させる要素を準備

htmlファイル内にオーバーレイ広告を表示させる要素を作成し、任意のclass名またはid名を付けます。

```html
<div class="overlay-images">

</div>
```

作成した要素に対して、以下のスタイルを指定します。（ページ表示時に、設定した広告の画像が表示されるのを防ぐためです。）
```css
.overlay-images {
  display: none;
}
```

### 3. スライドショーさせる広告を設定

上記で作成した要素内にスライドショーさせる広告タグ（リンク, 画像[, インプレッション計測用画像]）を順に貼り付けます。貼り付けた順番にスライドショーが実行されます。貼り付ける広告の数に制限はありません。（貼り付ける広告の画像はできるだけ同じサイズのものとすることを推奨します）

```html
<div class="overlay-imagess">
  <a href="http://example.com/">
    <img src="http://exapmle.com/example1.png" width="300" height="200">
  </a>
  <img src="http://example.com/img1.gif" width="1" height="1">
</div>
```

設定する広告タグは以下の形式（`img要素`を持った`a要素`）となります。a要素には必ずhref属性、img要素にはwidth属性、height属性を設定するようにしてください（width属性、height属性がないと画像の表示サイズに不具合が生じる場合があります）。インプレッションを計測するためのimg要素はあってもなくても問題ありません。（多くのアフィリエイトサービスの広告タグは以下の形式となっていることが多いです）

```html
<!-- スライドショーの対象となる広告タグの形式 -->

<!-- 広告の飛び先URL（href属性必須） -->
<a href="http://example.com/">
    <!-- 広告の画像（width属性/height属性必須） -->
  <img src="http://exapmle.com/example.png" width="300" height="200">
</a>
<!-- インプレッション計測用のimg要素（任意） -->
<img src="http://example.com/img.gif" width="1" height="1">
```

### 4. プラグインを実行

ステップ2で作成した要素に対して、`.overlayAd()`メソッドを実行します。

```javascript
$('.overlay-images').overlayAd();
```


## Options

**position {String}** 'bottom',
**mobileStyle {String}** 'responsive',
**targetBlank {Boolean}** false,
**backgroundStyle {Boolean}** true,
**backgroundColor {String}** 'rgba(1,1,1 ,1)'









デフォルトでは画面下部に固定表示されるようになっていますが、以下のようにオプションを設定すると、画面上部に固定表示させることができます。


###3. レスポンシブ Responsive

画面サイズに合わせてバナー広告のサイズもアスペクト比を維持しながら伸縮させて表示させる広告スタイル。

[→レスポンシブのサンプル](http://jsrun.it/maechabin/yjvd)

```js
$(".selector").cbResponsive();
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



オプションの指定方法は以下の通りです。slideShowAd()メソッドの引数にオブジェクトリテラル形式でオプションを指定します。
```javascript
// ページ上部に固定し、ページを狭めるとトリミング表示、
// リンク先は別ウィンドウで表示、背景なし（余白あり）
$('.overlay-images').overlayAd({
  'position': 'top',
  'mobileStyle': 'trimming',
  'targetBlank': true,
  'backgroundStyle': false,
  'backgroundColor': 'none'
});
```



## License

Mit License
