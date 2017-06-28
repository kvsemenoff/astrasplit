<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/fonts.css">
<link rel="stylesheet" href="../css/reset.css">
<link href="https://fonts.googleapis.com/css?family=Arsenal:400,700|Noto+Sans" rel="stylesheet">
<link rel="stylesheet" href="../block/h2/style.css">
<link rel="stylesheet" href="../block/input/style.css">
<link rel="stylesheet" href="../block/button/style.css">
<link rel="stylesheet" href="../block/textarea/style.css">
<link rel="stylesheet" href="../css/popup.scss">
</head>

<body>
<a href="#order_call" data-modal="modal" >Заказать</a>
<a href="#send_prop" data-modal="modal" >Предложение</a>
<a href="#get_discount" data-modal="modal" >Получить скидку</a>
<div class="modal-window" id="order_call">
	<span class="modal-close"></span>
	<div class='popup-title'>
	<span class='get-call-logo'></span>
		<h2>Заказать звонок</h2>
		<p>Представьтесь, мы перезвоним Вам</p>
	</div>
	<div class='popup-content'>
		<form>
		<p class='input-title'>Телефон<span>*</span></p>
		<input type="tel" name='phone'>
		<p class='input-title'>Ваше имя<span>*</span></p>
		<input type='text' name='phone'>
		<p>Заполняя форму, вы соглашаетесь с <a href='#'>политикой <br />хранения и обработки ваших персональных данных</a></p>
		<p class='nes-input'><span>*</span> — Обязятельные поля</p>
		<input type='submit' class='button button_blue' value='Отправить'>
		</form>
	</div>
</div>

<div class="modal-window" id="send_prop">
	<span class="modal-close"></span>
	<div class='popup-title popup-prop'>
		<h2>Отправить предложение</h2>
	</div>
	<div class='popup-content'>
		<form>
		<p class='input-title'>Ваше имя<span>*</span></p>
		<input type='text' name='phone'>
		<p class='input-title'>Телефон<span>*</span></p>
		<input type="tel" name='phone'>
		<p class='input-title'>Комментарий</p>
		<textarea></textarea>
		<p>Заполняя форму, вы соглашаетесь с <a href='#'>политикой <br />хранения и обработки ваших персональных данных</a></p>
		<p class='nes-input'><span>*</span> — Обязятельные поля</p>
		<input type='submit' class='button button_blue' value='Отправить'>
		</form>
	</div>
</div>

<div class="modal-window" id="get_discount">
	<span class="modal-close"></span>
	<div class='popup-title popup-prop'>
		<h2>Получить скидку</h2>
	</div>
	<div class='popup-content'>
		<form>
		<p class='input-title'>Ваше имя<span>*</span></p>
		<input type='text' name='phone'>
		<p class='input-title'>Телефон<span>*</span></p>
		<input type="tel" name='phone'>
		<p class='input-title'>Комментарий</p>
		<textarea></textarea>
		<p>Заполняя форму, вы соглашаетесь с <a href='#'>политикой <br />хранения и обработки ваших персональных данных</a></p>
		<p class='nes-input'><span>*</span> — Обязятельные поля</p>
		<input type='submit' class='button button_blue' value='Отправить'>
		</form>
	</div>
</div>

<div class="modal-window" id="thanks">
	<span class="modal-close">Закрыть</span>
	<br>
	<span class="popup-title">Спасибо за вашу заявку!</span>
	<p>
		В ближайшее время наш менеджер <br> свяжется с Вами.
	</p>	
</div>
<script src="../libs/jquery/dist/jquery.js"></script>
<script src="../js/popup.js"></script>

</body>
