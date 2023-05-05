-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 01 2023 г., 08:01
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `school`
--

-- --------------------------------------------------------

--
-- Структура таблицы `carousel`
--

CREATE TABLE `carousel` (
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `carousel`
--

INSERT INTO `carousel` (`name`) VALUES
('638322128.jpg'),
('905516451.jpg'),
('607788662.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `phone1` varchar(20) NOT NULL,
  `phone2` varchar(20) NOT NULL,
  `email1` text NOT NULL,
  `email2` varchar(32) NOT NULL,
  `map` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone1`, `phone2`, `email1`, `email2`, `map`) VALUES
(1, 'Xorezm viloyati Urganch shahri Nurafshon mahallasi Mustaqqillik ko\'chasi 4-uy', '+998 62 227-77-77', '+998 62 227-77-77', 'test@test.uz', 'test@test.uz', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2545.3370989811538!2d74.57151426079791!3d42.86763109253948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec839a171340f%3A0x13f9cd1ba646e9b0!2z0JTQtdC70YzRhNC40L0!5e0!3m2!1sru!2s!4v1682829349686!5m2!1sru!2s');

-- --------------------------------------------------------

--
-- Структура таблицы `gallery`
--

CREATE TABLE `gallery` (
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `gallery`
--

INSERT INTO `gallery` (`name`) VALUES
('896982361.jpg'),
('862421300.jpg'),
('963981069.png'),
('137373000.png'),
('590026291.png'),
('283978461.png'),
('875235230.png'),
('84520070.png');

-- --------------------------------------------------------

--
-- Структура таблицы `home`
--

CREATE TABLE `home` (
  `id` int(11) NOT NULL,
  `allPupils` int(10) NOT NULL,
  `activePupils` int(10) NOT NULL,
  `employees` int(10) NOT NULL,
  `year` int(10) NOT NULL,
  `mainImage` text NOT NULL,
  `mainTitle` text NOT NULL,
  `mainText` text NOT NULL,
  `aboutUs` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `home`
--

INSERT INTO `home` (`id`, `allPupils`, `activePupils`, `employees`, `year`, `mainImage`, `mainTitle`, `mainText`, `aboutUs`) VALUES
(1, 21212, 122, 21, 22, '244352957.jpg', 'Facilis consequatur eligendi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.', '<p><span style=\"color:rgb(8, 31, 70);\"><span style=\"background-color:rgb(255, 255, 255);\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga soluta iste asperiores impedit odit, deserunt nobis aut voluptates praesentium voluptatem dolor nam et alias, sequi dolorum? Cumque natus tenetur assumenda explicabo ratione, dignissimos labore maxime qui doloremque iusto, sunt dolorum quos ipsum voluptas voluptate similique doloribus iure reiciendis, officiis unde expedita? Nisi ipsam quod veritatis illo repellendus modi magnam laboriosam officiis corrupti. Hic similique asperiores aspernatur deleniti atque reiciendis id, ratione quod quas libero praesentium, voluptate nam voluptas quidem explicabo expedita necessitatibus quos, velit laudantium. Perspiciatis vero mollitia tempora repellendus reprehenderit, cumque nihil optio dolor porro. Officiis in enim vel amet quod perspiciatis recusandae consequuntur porro sapiente natus eos autem, consequatur aliquid corrupti,mollitia obcaecati inventore minus rem illum incidunt tenetur laudantium ut praesentium. Minus non est, soluta reiciendis praesentium ut nisi placeat incidunt eveniet repellat porro quia? Illum numquam pariatur fugiat voluptatem nemo itaque eveniet at rem repellat, sed culpa, vel a? Odio illum, hic minima voluptatum ratione qui similique rerum. Quisquam, delectus aperiam! Ducimus eum vitae ipsam voluptates aliquam deleniti! Beatae facilis sint animi nostrum esse! Illo impedit sit eius incidunt similique molestiae necessitatibus. Sit perferendis ex minima.</span></span></p><p></p><p style=\"text-align:center\"><span style=\"color:rgb(8, 31, 70);\"><span style=\"background-color:rgb(255, 255, 255);\"><img src=\"https://img.freepik.com/premium-photo/creative-mind-3d-illustration-with-light-bulb-generative-ai_549702-684.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.1691043777.1682846766&amp;semt=sph\" alt=\"\" title=\"\" width=\"668px\"></span></span></p><p></p><p><span style=\"color:rgb(8, 31, 70);\"><span style=\"background-color:rgb(255, 255, 255);\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga soluta iste asperiores impedit odit, deserunt nobis aut voluptates praesentium voluptatem dolor nam et alias, sequi dolorum? Cumque natus tenetur assumenda explicabo ratione, dignissimos labore maxime qui doloremque iusto, sunt dolorum quos ipsum voluptas voluptate similique doloribus iure reiciendis, officiis unde expedita? Nisi ipsam quod veritatis illo repellendus modi magnam laboriosam officiis corrupti. Hic similique asperiores aspernatur deleniti atque reiciendis id, ratione quod quas libero praesentium, voluptate nam voluptas quidem explicabo expedita necessitatibus quos, velit laudantium. Perspiciatis vero mollitia tempora repellendus reprehenderit, cumque nihil optio dolor porro. Officiis in enim vel amet quod perspiciatis recusandae consequuntur porro sapiente natus eos autem, consequatur aliquid corrupti,mollitia obcaecati inventore minus rem illum incidunt tenetur laudantium ut praesentium. Minus non est, soluta reiciendis praesentium ut nisi placeat incidunt eveniet repellat porro quia? Illum numquam pariatur fugiat voluptatem nemo itaque eveniet at rem repellat, sed culpa, vel a? Odio illum, hic minima voluptatum ratione qui similique rerum. Quisquam, delectus aperiam! Ducimus eum vitae ipsam voluptates aliquam deleniti! Beatae facilis sint animi nostrum esse! Illo impedit sit eius incidunt similique molestiae necessitatibus. Sit perferendis ex minima.</span></span></p>');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `name`, `email`, `subject`, `message`, `date`) VALUES
(5, 'ali', 'est@est.com', 'alo', 'ali', '2023-04-14 14:31:46'),
(6, 'ali', 'est@est.com', 'alo', 'ali', '2023-04-14 15:06:35');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `image` varchar(20) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `title`, `text`, `image`, `date`) VALUES
(5, 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!', '340364533.png', '2023-04-30 18:38:47'),
(6, 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!', '378431335.png', '2023-04-30 18:39:26'),
(7, 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!\n\n\n', '276631885.png', '2023-04-30 18:40:02'),
(8, 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!', '548799356.png', '2023-04-30 18:40:43'),
(10, 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!', '582674067.png', '2023-04-30 18:42:40'),
(11, 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, unde deleniti. Nisi, cumque cum aliquam laboriosam iure ex aperiam nihil officiis possimus expedita magni nemo ab repudiandae earum beatae rerum. Quibusdam harum in ut. Reiciendis, delectus neque. Facere suscipit neque excepturi animi sapiente quia distinctio, quibusdam, blanditiis maxime optio sed officiis repellat fugit delectus unde repellendus in amet modi ducimus exercitationem corporis accusamus enim! Et vel atque nihil debitis, aliquid dolores sunt incidunt culpa praesentium accusantium laboriosam tempore voluptatibus magnam voluptatem non excepturi repellat nam nobis eligendi harum rerum tempora illum? Libero unde exercitationem tempora inventore voluptatem, est placeat doloribus!', '37068703.png', '2023-04-30 18:43:13');

-- --------------------------------------------------------

--
-- Структура таблицы `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `position` varchar(40) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `team`
--

INSERT INTO `team` (`id`, `fullname`, `position`, `text`, `image`) VALUES
(2, 'Zarina Farhodova Durdiyevna', 'Qahramon', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsam id dignissimos animi a. Repellat consequatur labore nulla aliquam vero consectetur, assumenda adipisci, voluptatem, amet consequuntur repudiandae vitae. Sunt atque quo non ipsum accusantium unde molestiae nulla quaerat, maiores ut alias sed minima, quod distinctio aperiam blanditiis est? Corporis, quisquam!', '270615302.png'),
(3, 'Ali Valiyev', 'Direktor', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga soluta iste asperiores impedit odit, deserunt nobis aut voluptates praesentium voluptatem dolor nam et alias, sequi dolorum?', '847117249.png'),
(4, 'Vali Aliyev', 'Bo\'lim mudiri', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga soluta iste asperiores impedit odit, deserunt nobis aut voluptates praesentium voluptatem dolor nam et alias, sequi dolorum?', '666878368.png'),
(5, 'Uilyem Uols', 'Qahramon', 'Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.', '832541411.png');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'admin', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `home`
--
ALTER TABLE `home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
