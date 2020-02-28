$(function(){
     //追加
	$('.addformbox').click(function(){
		//クローンを変数に格納
		var clonecode = $('.box:last').clone(true); //(もし複製されていれば一番最後の)divタグのclass="box"をclone
		//数字を+1し変数に格納
		var cloneno = clonecode.attr('data-formno'); //格納したクローンの「data-formno」の値をcloneno変数に格納 //「attr()」は、HTML要素の属性を取得したり設定することができるメソッド
		var cloneno2 = parseInt(cloneno) + 1;
		var cloneno3 = parseInt(cloneno) + 2; //なぜ+2も用意するかというと、プログラミングの世界は0から始まる。だから人間の世界で言うと+2が1になるから。
		//data属性の数字を＋１(プログラムの世界での数値)
		clonecode.attr('data-formno', cloneno2);
		//pタグの表示している番号も+1で変更(人間の世界での数値)
		clonecode.find('.no').html(cloneno3); //「html()」を使うと、任意のHTML要素を取得したり意図的に要素を追加・書き換えをすることが出来る
		//name属性の数字を+1
		var namecode = clonecode.find('input.namae').attr('name');
		namecode = namecode.replace(/input\[[0-9]{1,2}/g,'input[' + cloneno2); //name属性で配列を扱える「input[0]」の様な値の数値を足し上げるための正規表現
		clonecode.find('input.namae').attr('name', namecode);
		
		var namecode2 = clonecode.find('textarea.toiawase').attr('name');
		namecode2 = namecode2.replace(/textarea\[[0-9]{1,2}/g,'textarea[' + cloneno2);
		clonecode.find('textarea.toiawase').attr('name', namecode2);
		//HTMLに追加
		clonecode.insertAfter($('.box:last')); //セレクタ、HTML文字列, DOM要素, jQueryオブジェクトのいずれかを指定し、この要素の後ろに マッチしている要素を挿入します。
	});
	
	//削除
	$('.deleteformbox').click(function(){
		//クリックされた削除ボタンの親要素の「.box」を削除
		$(this).parents(".box").remove();
		//番号を振り直すための変数
		var scount = 0;
		//「$(‘.box’).each」で存在する.box要素に対して番号振りなおす処理を繰り返し実行する
		$('.box').each(function(){ //each()で繰り返す
			var scount2 = scount + 1;
			//data属性の数字(プログラミングの世界での数値)
			$(this).attr('data-formno', scount); //0にセットする
			//pタグの表示している番号も+1で変更(人間の世界での数値)
			$('.no', this).html(scount2);
			
			//input質問タイトル番号振り直し
			var name = $('input.namae',this).attr('name');
			name = name.replace(/input\[[0-9]{1,2}/g,'input[' + scount);
			$('input.namae',this).attr('name',name);
	
			var name2 = $('textarea.toiawase',this).attr('name');
			name2 = name2.replace(/textarea\[[0-9]{1,2}/g,'textarea[' + scount);
			$('textarea.toiawase',this).attr('name',name2);
			
			scount += 1; //1ずつ増やしてeachに戻る
		});
	});
	
});