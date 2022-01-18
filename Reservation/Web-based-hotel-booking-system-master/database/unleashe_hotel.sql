-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 04:01 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `unleashe_hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE IF NOT EXISTS `booking` (
`booking_id` int(200) NOT NULL,
  `total_adult` int(50) NOT NULL,
  `total_children` int(50) NOT NULL,
  `checkin_date` date NOT NULL,
  `checkout_date` date NOT NULL,
  `special_requirement` text NOT NULL,
  `payment_status` varchar(50) NOT NULL,
  `total_amount` double DEFAULT NULL,
  `deposit` double NOT NULL,
  `booking_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telephone_no` varchar(30) NOT NULL,
  `add_line1` varchar(100) NOT NULL,
  `add_line2` varchar(100) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(30) NOT NULL,
  `postcode` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`booking_id`, `total_adult`, `total_children`, `checkin_date`, `checkout_date`, `special_requirement`, `payment_status`, `total_amount`, `deposit`, `booking_date`, `first_name`, `last_name`, `email`, `telephone_no`, `add_line1`, `add_line2`, `city`, `state`, `postcode`, `country`) VALUES
(127, 2, 0, '2020-12-05', '2020-12-07', '', 'pending', 440, 66, '2020-12-04 20:52:53', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', 'None', 'Ilyass', 'Ben', '50600', 'Maroc'),
(128, 1, 0, '2020-12-05', '2020-12-06', '', 'pending', 360, 54, '2020-12-05 03:49:58', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', 'None', 'Ilyass', 'Ben', '50600', 'Maroc'),
(129, 1, 0, '2020-12-05', '2020-12-07', '', 'pending', 240, 36, '2020-12-05 04:53:27', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', 'None', 'Ilyass', 'Ben', '50600', 'Maroc'),
(130, 1, 0, '2020-12-05', '2020-12-07', '', 'pending', 480, 72, '2020-12-05 04:58:13', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', 'None', 'Ilyass', 'Ben', '50600', 'Maroc'),
(131, 2, 0, '2020-05-21', '2020-05-23', '', 'pending', 240, 36, '2020-05-20 19:16:14', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', '', 'Ilyass', 'Ben', '50600', 'Maroc'),
(132, 2, 0, '2020-05-21', '2020-05-23', '', 'pending', 920, 138, '2020-05-20 19:18:52', 'Meryem ', 'El Halfa', 'meryem@gmail.com', '0128951744', 'adresse123', '', 'Ilyass', 'Ben', '50600', 'Maroc');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE IF NOT EXISTS `room` (
`room_id` int(255) NOT NULL,
  `total_room` int(255) NOT NULL,
  `occupancy` int(255) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `view` varchar(30) DEFAULT NULL,
  `room_name` varchar(50) NOT NULL,
  `descriptions` text,
  `rate` double NOT NULL,
  `imgpath` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `total_room`, `occupancy`, `size`, `view`, `room_name`, `descriptions`, `rate`, `imgpath`) VALUES
(1, 5, 2, '10 sqft', 'city', 'Deluxe Room', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', 120, 'img/room2.png'),
(2, 5, 2, '10 sqft', 'city', 'Single Room', 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', 100, 'img/room3.png'),
(3, 10, 10, '20 sqft', 'City', 'King Suite Room', 'Suitable for honeymoon', 120, 'img/room3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `roombook`
--

CREATE TABLE IF NOT EXISTS `roombook` (
  `booking_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `totalroombook` int(11) NOT NULL,
`id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roombook`
--

INSERT INTO `roombook` (`booking_id`, `room_id`, `totalroombook`, `id`) VALUES
(127, 1, 1, 67),
(127, 2, 1, 68),
(128, 3, 3, 69),
(129, 1, 1, 70),
(130, 1, 1, 71),
(131, 1, 1, 72),
(132, 1, 2, 73),
(132, 2, 1, 74);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL,
  `username` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'demo', 'demo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
 ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
 ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `roombook`
--
ALTER TABLE `roombook`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
MODIFY `booking_id` int(200) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=133;
--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
MODIFY `room_id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `roombook`
--
ALTER TABLE `roombook`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(500) NOT NULL,
  `gender` varchar(500) NOT NULL,
  `dob` text NOT NULL,
  `contact` text NOT NULL,
  `address` varchar(500) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `created_on` date NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`, `fname`, `lname`, `gender`, `dob`, `contact`, `address`, `image`, `created_on`, `group_id`) VALUES
(1, 'admin', 'meryem1999elh@gmail.com', 'aa7f019c326413d5b8bcad4314228bcd33ef557f5d81c7cc977f7728156f4357', 'ilyass', 'ben', 'Male', '2020-05-02', '9423979339', 'Meryem', 'mia.png', '2020-04-30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `manage_website`
--

CREATE TABLE `manage_website` (
  `id` int(11) NOT NULL,
  `title` varchar(600) NOT NULL,
  `short_title` varchar(600) NOT NULL,
  `logo` text NOT NULL,
  `footer` text NOT NULL,
  `currency_code` varchar(600) NOT NULL,
  `currency_symbol` varchar(600) NOT NULL,
  `login_logo` text NOT NULL,
  `invoice_logo` text NOT NULL,
  `background_login_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manage_website`
--

INSERT INTO `manage_website` (`id`, `title`, `short_title`, `logo`, `footer`, `currency_code`, `currency_symbol`, `login_logo`, `invoice_logo`, `background_login_image`) VALUES
(1, '', '', 'logo png.png', '', '', '', 'logo png.png', '', '1 (1).jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

CREATE TABLE `tbl_booking` (
  `id` int(200) NOT NULL,
  `name` varchar(500) NOT NULL,
  `roomname` varchar(500) NOT NULL,
  `kidno` int(200) NOT NULL,
  `adultno` int(200) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `taxamount` int(200) NOT NULL,
  `totalamount` int(200) NOT NULL,
  `paid` int(200) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`id`, `name`, `roomname`, `kidno`, `adultno`, `fromdate`, `todate`, `taxamount`, `totalamount`, `paid`, `created_date`) VALUES
(12, '1', '11', 1, 2, '2019-09-03', '2019-09-01', 1199, 1100, 500, '2019-09-09'),
(13, '1', '11', 1, 2, '2019-09-11', '2019-09-02', 5841, 4950, 0, '2019-09-09'),
(14, '1', '11', 1, 2, '2019-09-04', '2019-09-03', 649, 550, 0, '2019-09-09'),
(15, '2', '14', 1, 2, '2019-09-01', '2019-09-30', 25288, 23200, 0, '2019-09-10'),
(16, '2', '12', 1, 1, '2019-09-01', '2019-09-30', 16240, 14500, 0, '2019-09-10'),
(17, '2', '11', 1, 1, '2019-09-01', '2019-09-30', 15399, 13050, 0, '2019-09-10'),
(19, '3', '11', 0, 3, '2019-09-17', '2019-09-10', 6867, 6300, 0, '2019-09-10'),
(20, '3', '12', 0, 2, '2019-09-04', '2019-09-03', 784, 700, 0, '2019-09-10'),
(21, '3', '13', 0, 1, '2019-09-02', '2019-09-01', 436, 400, 0, '2019-09-10'),
(22, '2', '12', 1, 2, '2019-09-18', '2019-09-11', 7021, 5950, 0, '2019-09-10'),
(23, '1', '11,', 3, 2, '2019-10-21', '2019-10-24', 3717, 3150, 0, '2019-10-20');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_currency`
--

CREATE TABLE `tbl_currency` (
  `id` int(11) NOT NULL,
  `currcode` varchar(50) NOT NULL,
  `currsymbol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_currency`
--

INSERT INTO `tbl_currency` (`id`, `currcode`, `currsymbol`) VALUES
(2, 'INR', 'rs'),
(3, 'USD', '$');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer`
--

CREATE TABLE `tbl_customer` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `contact` varchar(200) NOT NULL,
  `address` varchar(300) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_customer`
--

INSERT INTO `tbl_customer` (`id`, `name`, `email`, `gender`, `birthdate`, `contact`, `address`, `created_date`) VALUES
(1, 'mia elh', 'mia@gmail.com', 'Female', '1999-05-29', '9423979339', 'morocco', '2019-09-09'),
(2, 'John Smith', 'john@gmail.com', 'Male', '1998-06-17', '9090909090', 'morocco', '2019-09-09'),
(3, 'ilyass ben', 'ily@gmail.com', 'Mle', '2013-06-15', '9090909090', 'morocco', '2019-09-10');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_discount`
--

CREATE TABLE `tbl_discount` (
  `id` int(50) NOT NULL,
  `discountname` varchar(50) NOT NULL,
  `percentage` int(50) NOT NULL,
  `expirydate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_discount`
--

INSERT INTO `tbl_discount` (`id`, `discountname`, `percentage`, `expirydate`) VALUES
(1, 'Flat', 25, '2020-07-27'),
(2, 'upto', 50, '2020-07-31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_email_config`
--

CREATE TABLE `tbl_email_config` (
  `e_id` int(21) NOT NULL,
  `name` varchar(500) NOT NULL,
  `mail_driver_host` varchar(5000) NOT NULL,
  `mail_port` int(50) NOT NULL,
  `mail_username` varchar(50) NOT NULL,
  `mail_password` varchar(30) NOT NULL,
  `mail_encrypt` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_email_config`
--

INSERT INTO `tbl_email_config` (`e_id`, `name`, `mail_driver_host`, `mail_port`, `mail_username`, `mail_password`, `mail_encrypt`) VALUES
(1, '<hotal_booking> ', 'mail.upturnit.com', 587, 'hotelAicha@gmail.com', 'x(ilz?cWumI2', 'sdsad');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

CREATE TABLE `tbl_payment` (
  `id` int(100) NOT NULL,
  `bookingid` int(100) NOT NULL,
  `amount` int(100) NOT NULL,
  `datee` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_payment`
--

INSERT INTO `tbl_payment` (`id`, `bookingid`, `amount`, `datee`) VALUES
(3, 14, 649, '2019-09-09'),
(4, 13, 5000, '2019-09-07'),
(6, 12, 500, '2019-09-10'),
(7, 12, 500, '2019-09-25');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rooms`
--

CREATE TABLE `tbl_rooms` (
  `id` int(50) NOT NULL,
  `floorno` int(50) NOT NULL,
  `roomname` varchar(50) NOT NULL,
  `peradultprice` int(50) NOT NULL,
  `perkidprice` int(50) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_rooms`
--

INSERT INTO `tbl_rooms` (`id`, `floorno`, `roomname`, `peradultprice`, `perkidprice`, `color`) VALUES
(11, 1, 'Superior', 300, 150, 'SLATEBLUE'),
(12, 1, 'double', 350, 150, 'pink'),
(13, 1, 'superior', 400, 300, 'orange'),
(14, 1, 'triple', 300, 200, 'yellow'),
(15, 1, 'Quad', 300, 200, 'green'),
(18, 1, 'deluxe', 300, 200, 'pink');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tax`
--

CREATE TABLE `tbl_tax` (
  `id` int(50) NOT NULL,
  `taxname` varchar(50) NOT NULL,
  `percentage` int(50) NOT NULL,
  `shortcode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tax`
--

INSERT INTO `tbl_tax` (`id`, `taxname`, `percentage`, `shortcode`) VALUES
(1, 'Goods And Services Tax', 18, 'GST'),
(2, 'Central GST', 9, 'CGST'),
(4, 'service tax', 12, 'st'),
(6, 'Goods Tax', 9, 'GT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manage_website`
--
ALTER TABLE `manage_website`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_currency`
--
ALTER TABLE `tbl_currency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_discount`
--
ALTER TABLE `tbl_discount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_email_config`
--
ALTER TABLE `tbl_email_config`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_rooms`
--
ALTER TABLE `tbl_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tax`
--
ALTER TABLE `tbl_tax`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `manage_website`
--
ALTER TABLE `manage_website`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_booking`
--
ALTER TABLE `tbl_booking`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_currency`
--
ALTER TABLE `tbl_currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_discount`
--
ALTER TABLE `tbl_discount`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_email_config`
--
ALTER TABLE `tbl_email_config`
  MODIFY `e_id` int(21) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_rooms`
--
ALTER TABLE `tbl_rooms`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_tax`
--
ALTER TABLE `tbl_tax`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;