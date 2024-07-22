-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2024 at 01:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `integ`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `clientID` int(11) NOT NULL,
  `username` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `departmentID` int(11) NOT NULL,
  `departmentacr` varchar(50) NOT NULL,
  `departmentname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`departmentID`, `departmentacr`, `departmentname`, `password`) VALUES
(1, 'CCMS', 'College of Computing and Multimedia Studies', 'formerICS'),
(2, 'CoEng', 'College of Engineering', 'enjineer');

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `officeID` int(11) NOT NULL,
  `officename` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `office`
--

INSERT INTO `office` (`officeID`, `officename`) VALUES
(1, 'Admission Office'),
(2, 'Registrar Office'),
(3, 'Guidance Office'),
(4, 'Health Service Office'),
(5, 'Library'),
(6, 'Canteen (Food Service)'),
(7, 'Student Publication'),
(8, 'Scholarship Programs'),
(9, 'Student Organization'),
(10, 'Sports and Cultural Services');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `questionID` int(11) NOT NULL,
  `officeID` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `question` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionID`, `officeID`, `number`, `question`) VALUES
(1, 1, 1, 'Ang mga patakaran at ibat ibang kursong mapag-aralan sa Kolehiyo ay malawak na naipapabatid sa pamamagitan ng \"brochures\", \"pamphlets\" at mga lathala at anunsiyong nakapisikal sa \"bulleting board\".'),
(2, 1, 2, 'Ang mga panuntunan, patakaran, tuntunin at gabay patungkol sa \"admission\" ay malinaw at ipinapatupad nang may sistema.'),
(3, 1, 3, 'Ang mga kawani ng tanggapan ay madaling lapitan, nagpapaliwanag nang maayos, matulungin at may kaaya-ayang ugali.'),
(4, 1, 4, 'Ang pagpapaskil ng mga nakapasa sa CNSC AT (CNSC Admission Test) ay naayon sa talatakdaan.'),
(5, 1, 5, 'Ang resulta ng CNSC AT ay maaring malaman kung kinakailangan.'),
(6, 2, 1, 'Ang paraan ng pagpapatala ay simple, maayos at kasiya-siya sa mga nagpapatala'),
(7, 2, 2, 'Edit to set question'),
(8, 2, 3, 'Edit to set question'),
(9, 2, 4, 'Edit to set question'),
(10, 2, 5, 'Edit to set question');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `clientID` int(11) NOT NULL,
  `officeID` int(11) NOT NULL,
  `questionNumber` int(11) NOT NULL,
  `acadyear` year(4) NOT NULL,
  `semester` enum('1stsem','2ndsem','midyear') NOT NULL,
  `response` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vpre`
--

CREATE TABLE `vpre` (
  `vpreID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vpre`
--

INSERT INTO `vpre` (`vpreID`, `username`, `password`) VALUES
(1, 'vpreADMIN', 'adminCNSC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`clientID`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`departmentID`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`officeID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`questionID`);

--
-- Indexes for table `vpre`
--
ALTER TABLE `vpre`
  ADD PRIMARY KEY (`vpreID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `clientID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `departmentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `office`
--
ALTER TABLE `office`
  MODIFY `officeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `vpre`
--
ALTER TABLE `vpre`
  MODIFY `vpreID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
