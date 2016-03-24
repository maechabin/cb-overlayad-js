# jquery-overlayad-js

バナー広告をページの下部または上部に`「固定（オーバーレイ）表示」`させるためのjQueryプラグイン。

## About

オーバーレイ表示とは、ページの上部または下部にバナー広告を固定して表示させるスタイルです。画面をスクロールしても常に表示され続けるため、クリック率が高くなります。300×50や320×50のバナーを使って実装するのが一般的です。当プラグインを使うとバナー広告のオーバーレイ表示を手軽に実装することができます。

また当プラグインでは、スマホでの表示を想定して画面サイズよりもバナーサイズが大きい場合や小さい場合の表示補助機能を用意しています。画面サイズがバナーサイズよりも大きかった場合に生じる余計なスペースの背景化、画面サイズがバナーサイズよりも小さかった場合のリキッド表示、トリミング表示に対応しています。

主にアフィリエイトサービスの広告を使用することを想定しているので、アフィリエイトサービスからそのまま広告をコピーして実装できるようになっています。

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

**position {String}**
オーバーレイ表示させる際の固定箇所を指定します。ページ上部に固定させる場合は`top`、ページ下部に固定させる場合は`bottom`を指定します。デフォルト値は`bottom`。

**mobileStyle {String}**
ページを狭めた際に、ページの横幅のサイズが表示している広告の画像よりも小さくなった場合の画像の表示スタイルを指定します。ページサイズに合わせて画像を縮小させる（アスペクト比は維持されます）場合は'responsive'、ページ中央のポジションを保ったままトリミングさせる場合は`trimming`を指定します。デフォルト値は`responsive`。

**targetBlank {Boolean}**
リンク先を別ウィンドウで表示するかしないか指定します。trueにするとリンク先を別ウィンドウで表示します。デフォルト値は`false`。

**backgroundStyle {Boolean}**
ページの横幅のサイズが、表示している広告の画像サイズよりも大きい場合、画像の両脇に余計なスペースが生じます。こちらのオプションの値を`true`の場合、画像の両脇の余計なスペースを背景色で埋め、クリック可能な領域に変更します。デフォルト値は`true`。

**backgroundColor {String}**
上記のbackgroundStyleを`ture`に設定した場合に設定される背景色を指定します。CSSでbackground-colorに指定できる値で指定します。デフォルト値は`rgba(1,1,1 ,1)`。


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
