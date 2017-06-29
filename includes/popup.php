<div class="modal-window" id="order_call">
	<span class="modal-close"></span>
	<div class='popup-title'>
	<span class='get-call-logo'></span>
		<h2>Заказать звонок</h2>
		<p>Представьтесь, мы перезвоним Вам</p>
	</div>
	<div class='popup-content'>
		<form name='popup_form'>
			<p class='input-title'>Телефон<span>*</span></p>
			<input type="tel" name='phone' required>
			<p class='input-title'>Ваше имя<span>*</span></p>
			<input type='text' name='uname' required>
			<p>Заполняя форму, вы соглашаетесь с <a href='#'>политикой <br />хранения и обработки ваших персональных данных</a></p>
			<p class='nes-input'><span>*</span> — Обязятельные поля</p>
			<input type='submit' class='button button_blue' value='Отправить'>
		</form>
	</div>
</div>

<div class="modal-window" id="send_prop">
	<span class="modal-close"></span>
	<div class='popup-title'>
		<h2>Отправить предложение</h2>
	</div>
	<div class='popup-content'>
		<form name='popup_form'>
			<p class='input-title'>Ваше имя<span>*</span></p>
			<input type='text' name='uname' required>
			<p class='input-title'>Телефон<span>*</span></p>
			<input type="tel" name='phone' required>
			<p class='input-title'>Комментарий</p>
			<textarea name='text'></textarea>
			<p>Заполняя форму, вы соглашаетесь с <a href='#'>политикой <br />хранения и обработки ваших персональных данных</a></p>
			<p class='nes-input'><span>*</span> — Обязятельные поля</p>
			<input type='submit' class='button button_blue' value='Отправить'>
		</form>
	</div>
</div>

<div class="modal-window" id="get_discount">
	<span class="modal-close"></span>
	<div class='popup-title'>
		<h2>Получить скидку</h2>
	</div>
	<div class='popup-content'>
		<form name='popup_form'>
			<p class='input-title'>Укажите цену, которая вас устроит,</br>и мы рассмотрим ваше предложение <span>*</span></p>
			<input type="text" name='discount' placeholder="0.00">
			<p class='input-title'>Вероятность успеха предложения</p>
			<img src='../img/grad.png' width='100%'/>
			<p class='nes-input'><span>*</span> —  В заказе может быть только один товар по цене с персональной скидкой. </p>
			<div>
				<input type='submit' class='button button_blue' value='Сделать предложение'>
			</div>
		</form>
	</div>
</div>

<div class="modal-window" id="thanks">
	<span class="modal-close"></span>
	<br>
	<span class="popup-title1">Спасибо за вашу заявку!</span>
	<p>
		В ближайшее время наш менеджер <br> свяжется с Вами.
	</p>	
</div>
<script src="../libs/jquery/dist/jquery.js"></script>
<script src="../js/popup.js"></script>
<script src="../js/common.js"></script>
