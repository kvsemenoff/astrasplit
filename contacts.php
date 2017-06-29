<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Контакты</title>
    <?php require_once('includes/header.php'); ?>
<div class="wrapper">
    <div class="content">
        <?php require_once('includes/header-top.php'); ?>
        <div class="container">
            <div class="breadcrumbs-di">
                <ul>
                    <li class="uncurrent"><a href="">Главная</a></li>
                    <li><a href="" class="current">Сервисный центр</a></li>
                </ul>
            </div>
            <main class="contacts_main clearfix">
                <h1 class="contacts_h1">Контакты</h1>
                <div class="col-md-7">
                    <div class="contacts_info">
                        <div class="contacts_address">
                            <p class="contacts_address__descr">Продажа, установка и обслуживание сплит-систем в
                                г. Астрахани</p>
                            <div class="contacts_workdays contacts_calendar clearfix">
                                <p class="contacts_workdays__title">режим работы:</p>
                                <p class="contacts_workdays__descr contacts_workdays__time">8:00 до 22:00 или Пн-Вс 9:00-18:00 (Звонки до 21:00)</p>
                            </div>
                            <div class="contacts_workdays contacts_phone clearfix">
                                <p class="contacts_workdays__title">телефон:</p>
                                <div class="contacts_workdays__descr">
                                    <p class="contacts_workdays__phone">+7 (8512) <span>72-11-72</span></p>
                                    <p class="contacts_workdays__phone">+7 (937) <span>822-28-38</span></p>
                                </div>
                            </div>
                            <div class="contacts_workdays contacts_email clearfix">
                                <p class="contacts_workdays__title">e-mail:</p>
                                <a href="mailto:seregabrt@mail.ru" class="contacts_workdays__descr contacts_workdays__email">seregabrt@mail.ru</a>
                            </div>
                            <div class="contacts_workdays contacts_office clearfix">
                                <p class="contacts_workdays__title">центральный офис:</p>
                                <p class="contacts_workdays__descr contacts_workdays__office">Анри Барбюса 34 (вход с торца) ненастоящий адрес</p>
                            </div>
                        </div>
                        <div id="mape" class="contacts_map"></div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="contacts_callback">
                        <div class="contacts_form">
                            <div class="contacts_form-header">
                                <p class="contacts_form-header__title">Обратная связь</p>
                                <p class="contacts_form-header__promo">Менеджер свяжется с Вами и ответит
                                    на все интересующие вопросы</p>
                            </div>
                            <div class="contacts_form-body"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div class="footer">
        <?php require_once('includes/footer.php'); ?>
    </div>
</div>
</body>
</html>