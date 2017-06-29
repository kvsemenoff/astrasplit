<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Главная</title>
	<?php require_once('includes/header.php'); ?>
<body>
	<div class="wrapper">
		<div class="content">
            <?php require_once('includes/header-top.php'); ?>
            <?php require_once('includes/breadcrumbs.php'); ?>
            <a href='#order_call' data-modal="modal">Заказать звонок</a>
            <a href='#send_prop' data-modal="modal">Отправить предложение</a>
            <a href='#get_discount' data-modal="modal">Получить скидку</a>
             <a href='#thanks' data-modal="modal"></a>
			<?php require_once('includes/popup.php'); ?>
		</div>
		<div class="footer">
			<?php require_once('includes/footer.php'); ?>  
		</div>
	</div>
</body>
</html>
