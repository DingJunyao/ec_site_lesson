-- MySQL dump 10.13  Distrib 5.5.25, for Win64 (x86)
--
-- Host: localhost    Database: dbtaoshu
-- ------------------------------------------------------
-- Server version	5.5.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblbook`
--

DROP TABLE IF EXISTS `tblbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblbook` (
  `fldID` int(11) NOT NULL AUTO_INCREMENT,
  `fldBName` varchar(100) NOT NULL,
  `fldAuthor` varchar(20) DEFAULT NULL,
  `fldAuthorCountry` varchar(10) DEFAULT NULL,
  `fldDate` date DEFAULT NULL,
  `fldPress` varchar(50) DEFAULT NULL,
  `fldPrice` float DEFAULT NULL,
  `fldPicture` varchar(100) DEFAULT NULL,
  `fldType` int(11) DEFAULT NULL,
  `fldDescription` varchar(1000) DEFAULT NULL,
  `fldNumber` int(11) DEFAULT '0',
  PRIMARY KEY (`fldID`),
  KEY `fldType` (`fldType`),
  CONSTRAINT `fldType` FOREIGN KEY (`fldType`) REFERENCES `tblbooktype` (`fldId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbook`
--

LOCK TABLES `tblbook` WRITE;
/*!40000 ALTER TABLE `tblbook` DISABLE KEYS */;
INSERT INTO `tblbook` VALUES (1,'刺杀骑士团长','村上春树','日本','2018-03-01','上海译文出版社',98,'刺杀骑士团长.jpg',3,'《刺杀骑士团长》是村上春树七年磨一剑的突破之作。一幅藏匿于阁楼的惊世画作串起战争年代挥之不去的伤痛经历和现实生活中超脱想象的意外离奇。夜半铃声与古庙洞口、神秘邻居免色涉与绘画班女学生秋川真理惠、“骑士团长”与“长面人”、现实世界与隐喻世界……村上春树用他擅长的层层剥开的写法，将读者步步引入奇妙之境。',10),(2,'别让好脾气害了你','周维丽','中国','2018-04-01','贵州人民出版社',39.8,'别让好脾气害了你.jpg',3,'很多人从小总是接受这样的教育：脾气越好的人越受欢迎，越能克制自己情绪的人越容易成就大事，自然而然长大以后就会形成这种错误的观念。事实上，脾气越好，越能克制自己的人，越是难以有所成就，这是因为：他们处处迁就他人，哪怕是关键的事情，哪怕一再损害自己的利益，他们也是一而再、再而三地做出让步；他们难以坚持自己的意见，不敢坚持自己的原则，无法让自己的才能发挥出来。更关键的是，在充满竞争的环境中，一个人没“脾气”的老好人，总是会成为被利用、被伤害的对象，如此一来，好脾气的人不仅陷入被动的人生状态，*终更是难以有所作为。本书能够让你认识到过于好脾气、过度压抑自己情绪的危害；帮助你建立属于自己的底线；让你不再迎合，做真正的自己，在工作和生活中获得人生的主动权。',4),(3,'此刻花开之纸上花园','徐静','中国','2018-03-01','百花洲文艺出版社',78,'此刻花开之纸上花园.jpg',17,'一座浪漫美丽的纸上花园，一场释放压力的雕刻之旅，纸张在巧手之下，仿佛被赋予了新的使命，与绚丽多彩的花朵和活泼灵动的动物相遇，让生命在手中绽放。',2),(4,'流量池','杨飞','中国','2018-04-01','中信出版社',68,'流量池.jpg',6,'移动互联网时代，信息日益冗余，新闻速朽；整体流量增长速度放缓，而竞争者数量高速增加；流量呈现变少、变贵、欺诈频繁的现状；品效合一的营销策略成为共识，而实现路径成为痛点；多次开创各营销渠道效果之*的营销人、各种刷屏级营销事件操盘手、神州优车CMO杨飞，这一次倾囊相授，诚恳讲述如何实现流量获取、营销转化以及流量的运营和再挖掘。',5),(5,'五百年来王阳明','郦波','中国','2017-08-01','上海人民出版社',68,'五百年来王阳明.jpg',7,'阳明心学是中国传统文化的精华，是增强中国人文化自信的切入点，五百年来无数风云人物为之痴迷。本书之所以称作阳明心学的入门佳作，是因为郦波教授通过王阳明苦难辉煌的一生，展现心学的强大力量，揭示心学的精华——“心外无物”，成就事业，格局始于立志；“知行合一”，思想要转化为行动，实干兴邦；“致良知”，人生要有大境界。本书值得当代中国人用心阅读，以心学智慧告别心浮气躁，实现人生价值。当每个人都能奋起，中华民族的伟大复兴指日可待。 ',7),(6,'彩绘中华传统故事','任溶溶','中国','2018-04-01','浙江少年儿童出版社',320,'彩绘中华传统故事.jpg',15,'《中国神话故事》两卷收录了汉族、布依族、侗族、哈尼族、蒙古族、苗族、纳西族、瑶族等民族在内的四十二篇神话故事，从中可以看到不同民族的历史和人文风貌。中国神话故事浓缩了丰富的历史文化，是中国古代文学中优美、动人的一部分，是中华民族璀璨的文化瑰宝。《中国民间故事》两卷收录了包括汉族、傣族、景颇族、蒙古族、瑶族、苗族、藏族、维吾尔族等民族在内的三十篇民间故事，从中可见不同民族的不同历史和文化风貌。中国民间故事包含了丰富的历史知识、深厚的民族情感，作为中华文化不可或缺的一部分，它有着永恒的艺术魅力。《中国历史故事》两卷收录了人们耳熟能详、脍炙人口的三十八篇历史故事，从中可以窥探到中国历史中重要的一些生发节点。中国历史故事浓缩了丰厚的历史文化，是中国古代文学中优美、动人的一部分，是中华民族璀璨的文化瑰宝。《中国成语故事》两卷收录了一百多则常用成语，根据其出处典故，用现代汉语编写成简明生动、通俗易懂的故事。中国成语故事饱含了古代社会政治、军事、文化、民俗等各方面的知识，继承了传统文化，蕴含着深厚的语言智慧，是中华文化中一颗璀璨的明珠。',8),(7,'中国传统节日故事图','高洪波等','中国','2018-04-01','中国少年儿童出版社',154,'中国传统节日故事图.jpg',15,'这是一套以中国传统节日为主题的图画书，共有七册，包含了春节、元宵节、清明节、端午节、七夕节、中秋节和重阳节七大传统节日，将中国传统节日习俗、文化内涵，融入到贴近儿童生活的故事里。故事内容生动活泼，具有时代特色，同时也保持中国传统文化的端庄大气，让孩子们感受到原汁原味的节日气氛，在体会节日的欢愉中，知道节日背后的意义，得到中国优秀的传统文化的滋养。',6),(8,'清单人生','弗雷德里克·巴克曼','瑞典','2018-04-01','天津人民出版社',42,'清单人生.jpg',3,'布里特-玛丽的情商接近于零（也许会让你想起家里某个亲戚）。她夸奖别人的新发型：\"您的额头非常宽，剪这么短的发型需要很大的勇气\"；她管别人要一杯水时，会责怪对方竟然不给她杯垫。关键是，她根本意识不到这会得罪人！她内向、胆怯，渴望改变却不敢改变。她的生活严格遵循一张张事先制定的清单，她甚至有一张记录所有清单的清单。她6点准时起床，12点必须用餐，将家里的一切整理得一尘不染，因为她相信，只要什么都不变，生活就能永远持续下去。',9),(9,'Head First Java','塞若等','美国','2017-02-01','中国电力出版社',79,'HeadFirstJava.jpg',1,'《HeadFirstJava》是一本完整地面向对象(object-oriented，OO)程序设计和Java的学习指导用书，根据学习理论所设计，你可以从程序语言的基础开始，到线程、网络与分布式程序等项目。重要的是，你可以学会如何像一个面向对象开发者一样去思考，而且不只是读死书。',4),(10,'PHP从入门到精通','明日科技','中国','2017-06-01','清华大学出版社',79.8,'PHP从入门到精通.jpg',1,'《php从入门到精通（第4版）》从初学者角度出发，通过通俗易懂的语言、丰富多彩的实例，详细介绍了使用PHP进行网络开发应该掌握的各方面技术。《php从入门到精通（第4版）》共分4篇25章，其中，基础知识篇包括初识PHP、PHP环境搭建和开发工具、PHP语言基础、流程控制语句、字符串操作、正则表达式、PHP数组、PHP与Web页面交互、PHP与JavaScript交互、日期和时间；核心技术篇包括Cookie与Session、图形图像处理技术、文件系统、面向对象、PHP加密技术、MySQL数据库基础、phpMyAdmin图形化管理工具、PHP操作MySQL数据库、PDO数据库抽象层、ThinkPHP框架；高级应用篇包括Smarty模板技术、PHP与XML技术、PHP与Ajax技术；项目实战篇包括应用Smarty模板开发电子商务网站、应用ThinkPHP框架开发明日导航网等内容。书中所有知识都结合具体实例进行介绍，涉及的程序代码均附以详细的注释，可以使读者轻松领会PHP程序开发的精髓，快速提高开发技能。 《php从入门到精通（第4版）》适合作为软件开发入门者的自学用书，也适合作为高等院校相关专业的教学参考书，也可供开发人员查阅、参考。',8),(14,'大数据架构详解：从数据获取到深度学习','朱洁','中国','2016-10-01','电子工业出版社',69,'大数据架构详解：从数据获取到深度学习.jpg',1,'本书从架构、业务、技术三个维度深入浅出地介绍了大数据处理领域端到端的知识。主要内容包括三部分：*部分从数据的产生、采集、计算、存储、消费端到端的角度介绍大数据技术的起源、发展、关键技术点和未来趋势，结合生动的业界*产品，以及学术界*的研究方向和成果，让深奥的技术浅显易懂；第二部分从业务和技术角度介绍实际案例，让读者理解大数据的用途及技术的本质；第三部分介绍大数据技术不是孤立的，讲解如何与前沿的云技术、深度学习、机器学习等相结合。',0),(15,'Harry Potter','J. K. Rowling','英国','2013-08-01','Scholastic Paperbacks',348,'HarryPotter.jpg',2,'《哈利波特》系列图书自1997年在英国问世以来，迄今在全世界已发行超过四亿多册，创造了出版史上的奇迹。 其故事惊险离奇、神幻莫测；情节跌宕起伏、悬念丛生，从头至尾充满幽默。作者巧妙地将世界文学名著中所具有的美学品格集于一身，达到了想象丰富，情节紧凑，推理严密，人物刻画深刻的艺术效果。同时它也是一套引导孩子们勇敢向上，见义勇为，善良待人的好作品。难能可贵的是，“哈利·波特”不仅深受孩子们的追捧，同时又为成人所喜爱。',4),(16,'C程序设计','谭浩强','中国','2012-07-01','清华大学出版社',33,'C程序设计.jpg',1,'本书为“十二五”普通高等教育本科*规划教材、北京市高等教育精品教材立项项目，获全国高校出版社优秀畅销书特等奖、原电子工业部优秀教材一等奖、全国高等院校计算机基础教育研究会优秀教材一等奖等多项奖项。谭浩强教授所著的《C程序设计》累计发行逾1250万册，不仅创同类书的全国纪录，在世界上也是罕见的，堪称出版界的奇迹。《C程序设计（第四版）》是一本公认的学习C语言程序设计的经典教材。本书是与《C程序设计（第四版）》配合使用的参考用书。全书共分4个部分，第1部分是《C程序设计（第四版）》一书的习题和参考解答，包括了该书各章的全部习题，对全部编程习题都给出了参考解答；第2部分是深入学习C程序设计，包括预处理指令、位运算和C程序案例；第3部分是上机指南，详细介绍了Visual C  6.0集成环境下编辑、编译、调试和运行程序的方法；第4部分是上机实验指导，包括程序的调试与测试、实验的目的与要求，并提供了12个实验。',6),(17,'C++程序设计','谭浩强','中国','2015-08-01','清华大学出版社',49.5,'C++程序设计.jpg',1,'本书是初学者学习C ++程序设计的经典教材，荣获全国高校出版社优秀畅销书一等奖，是发行逾1250万册《C程序设计（第四版）》的升级篇。本书作者深入调查了大学的程序设计课程的现状和发展趋势，参阅了国内外数十种有关C 的教材，认真分析了读者在学习中的困难和认识规律，设计了读者易于学习的教材体系，于2004年出版了《C 程序设计》一书。该书降低入门起点，不需要C语言的基础，从零起点介绍程序设计和C 。广大师生用后反映非常好，认为该书定位准确，概念清晰，深入浅出，取舍合理，以通俗易懂的语言对C 的许多难懂的概念作了透彻而通俗的说明，大大降低了初学者学习的困难，是初学者学习C 的一本好教材。',7);
/*!40000 ALTER TABLE `tblbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblbooktype`
--

DROP TABLE IF EXISTS `tblbooktype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblbooktype` (
  `fldId` int(11) NOT NULL AUTO_INCREMENT,
  `fldType` varchar(10) NOT NULL,
  PRIMARY KEY (`fldId`),
  UNIQUE KEY `fldId_UNIQUE` (`fldId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbooktype`
--

LOCK TABLES `tblbooktype` WRITE;
/*!40000 ALTER TABLE `tblbooktype` DISABLE KEYS */;
INSERT INTO `tblbooktype` VALUES (1,'计算机'),(2,'英语'),(3,'文学'),(4,'经济'),(5,'管理'),(6,'政治'),(7,'哲学'),(8,'数学'),(9,'物理'),(10,'化学'),(11,'生物'),(12,'地理'),(13,'体育'),(14,'音乐'),(15,'儿童读物'),(16,'教辅类'),(17,'艺术');
/*!40000 ALTER TABLE `tblbooktype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluser`
--

DROP TABLE IF EXISTS `tbluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbluser` (
  `fldName` varchar(20) NOT NULL,
  `fldPassword` varchar(20) NOT NULL,
  PRIMARY KEY (`fldName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
INSERT INTO `tbluser` VALUES ('13611598888','Qwer1234'),('13611599434','Abcd1234'),('13611599986','Zxcv1234'),('13611599999','1234Qwer');
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-15 13:50:50
