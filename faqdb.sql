-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: faqdb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'<p>they just dont do ewtwertwe wertwert dghgjjhfgkhfk hjfhfkjhfj<br>do&nbsp;<br>it</p>','why does anyone need faq',NULL,'fdsgdfgsdf',NULL,NULL,NULL,'2025-07-21 01:52:48.296780'),(7,'y','w',NULL,NULL,'2025-07-11 11:22:56.867597','Ab',NULL,'2025-07-11 11:22:56.867597'),(10,'bscaj cj','habahj',NULL,'jabjb','2025-07-14 19:39:19.543974','Anmolbhatt1',NULL,'2025-07-14 19:39:19.543974'),(13,'<p><span style=\"background-color: #fbeeb8;\">Faq means</span> <strong>Frequently asked questions.</strong></p>','what is FAQ',NULL,'question','2025-07-18 11:40:00.862034','Anmolbhatt1',NULL,'2025-07-18 11:40:00.862034'),(14,'<p>aa</p>','aa',NULL,'aa','2025-07-18 12:04:18.481505','Anmolbhatt1',NULL,'2025-07-18 12:04:18.481505'),(15,'<p>hello</p>','hello',NULL,'hello','2025-07-21 01:43:29.789054','Anmolbhatt1',NULL,'2025-07-21 01:43:29.789054'),(16,'<p>they<br>just</p>','aaa',NULL,'a','2025-07-21 01:53:11.152144','Anmolbhatt1',NULL,'2025-07-21 01:53:11.152144');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq_tags`
--

DROP TABLE IF EXISTS `faq_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq_tags` (
  `faq_id` int NOT NULL,
  `tags` varchar(255) DEFAULT NULL,
  KEY `FKc9wcihwvl2rn45uvbmejq7g8h` (`faq_id`),
  CONSTRAINT `FKc9wcihwvl2rn45uvbmejq7g8h` FOREIGN KEY (`faq_id`) REFERENCES `faq` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq_tags`
--

LOCK TABLES `faq_tags` WRITE;
/*!40000 ALTER TABLE `faq_tags` DISABLE KEYS */;
INSERT INTO `faq_tags` VALUES (10,'aaa'),(13,'basic'),(14,'aa'),(15,'hello'),(1,'efgsd'),(16,'a');
/*!40000 ALTER TABLE `faq_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `marks` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=503 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'$2a$10$GTqGAyY6J20fonq9ncaKrOisMmaiQZxqEnm9K7NYlvtJtO5h/bpVq','anmol',NULL),(2,'a@a.com','$2a$10$FrtWu9od6G9SAuwo2MX/neEUQ.McKlJFTQiHZvkFoCpdFJ8KQzXdW','abhatt','ADMIN'),(52,'mymail','$2a$10$oep3Sb25SY4NE1cQZP0hnOK9Buuo9suaZ4oYgVhafXkzKl5g0JWvW','ANM','ADMIN'),(103,'abh','$2a$10$x8PpwKpQ2tIZ7YQ07b3z0ejbEtAf1oWoKcG13M4LYiGcfbp/5ej4q','ANMOL Bh','admin'),(152,'aabb','$2a$10$ALLNJ9s/9gUxPcKv345PmO62E1TPcCWiMPSdlEt1p6bI.wT.98Wiq','Ab','ADMIN'),(202,'email','$2a$10$HpKE7bb1t7VGuWPEueLt9u7XciZE2TxK8q.CfTXgDzhWpptkNId7G','ABH','ADMIN'),(253,'email','$2a$10$.UBK21r5G5VAbuRpfmYmAu3/b4ltaEMYG6tLhv1tu..zWwcWoVQvO','Anmolbhatt','ADMIN'),(302,'email','$2a$10$YAYkAAWIh99dVjo887k5xeK3xDTTcgoJwI.um7oPQUpn..nMWYZxW','Anmolbhatt1','ADMIN'),(402,'aaabbb','$2a$10$.3vgFyQ/leJfBrxnne062O1KMpOowOZ0TE3DzFWpHXh1t51m/QuH6','aaabbb','ADMIN'),(403,'aabb','$2a$10$O381KksYIQnWngf7YkucGuqxqf6/DevHkUI1/dZXSQPD2hOatwolu','aabb','USER'),(452,'saurabh@gmail.com','$2a$10$AwXRaYG.pAXSZPOkyxoTx.VN6WIC0/iWmQC4KU6TWOpPQYsmA86Gm','saurabh','ADMIN'),(454,'email','$2a$10$OSbhJ/otfwq5YEmM/Hv4kOAn8AVmnz.jhOGlABcq2UYGf.pGd1FDm','Anmolbhatt1111','ADMIN'),(502,'abh1121','$2a$10$m/jvpgb7825ufva/3R096ub/G7pOnwArlbmTLhlWUdK5wYkYw21eC','Abh1121','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_bookmarked_faqs`
--

DROP TABLE IF EXISTS `users_bookmarked_faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_bookmarked_faqs` (
  `user_id` bigint NOT NULL,
  `bookmarked_faqs_id` int NOT NULL,
  KEY `FKe2i8310tx8lcnm4y5ss581jpd` (`bookmarked_faqs_id`),
  KEY `FKf4cycy4qqd258v2kun8kcmi1m` (`user_id`),
  CONSTRAINT `FKe2i8310tx8lcnm4y5ss581jpd` FOREIGN KEY (`bookmarked_faqs_id`) REFERENCES `faq` (`id`),
  CONSTRAINT `FKf4cycy4qqd258v2kun8kcmi1m` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_bookmarked_faqs`
--

LOCK TABLES `users_bookmarked_faqs` WRITE;
/*!40000 ALTER TABLE `users_bookmarked_faqs` DISABLE KEYS */;
INSERT INTO `users_bookmarked_faqs` VALUES (403,1),(452,1),(452,10),(502,13),(302,15);
/*!40000 ALTER TABLE `users_bookmarked_faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (601);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-21 11:31:57
