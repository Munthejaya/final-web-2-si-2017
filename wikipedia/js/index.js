
function changeBackground() {
  var colours = ["#EF4836", "#BF55EC", "#59ABE3", "#1BBC9B", "#F2784B", "#F5AB35", "#049372", "#3A539B", "#F5AB35"];
  var randomizer = colours[Math.floor(Math.random()*colours.length)];
	$(".container")[0].style.background = randomizer;
  $("button")[0].style.color = randomizer;
  $("h1")[0].style.background = randomizer;
}
changeBackground();

$(document).ready(function() {
  $("button").hover(function() {
    $("button").toggleClass("animated fadeIn");
  })
})

$(document).ready(function() {
  $("button").click(function() {
    $("p").fadeOut(400, function() {
      $("div p, .container a").remove();
      var switcher = Math.round(Math.random() *53); //multiply by total number of cases
      switch (switcher) {
        case 0:
          $("<p>“our face is the longing painted from the love of God adorned with all beauty that therefore, appears every perfection.”	<br> -True love</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg ndeed there Takan eternal .. Such was the love, Came and passed like a dream Spreading happiness, And also ... scraping wound .” -Geovani\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 1:
          $("<p>“I want to crown love with loyalty and sacrifice so that when we parted you will know my love just for you” 	<br> -Yanti sitompul !</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The more that you read, the more things you will know. The more that you learn, the more places you'll go.” - Dr. Seuss\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 2:
          $("<p>“Live as if you were to die tomorrow. Learn as if you were to live forever.”	<br> -True Love</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg Live as if you were to die tomorrow. Learn as if you were to live forever.” -True Love\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 3:
          $("<p>“I love you with my heartI love you with my soul.” 	<br>- Henny tarigan</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Any fool can know. The point is to understand.” -Albert Einstein\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 4:
          $("<p>“I know you don’t believe in mebut trust me for I knowmy love is deep.” 	<br>- Sintia Ginting</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “my love is trueand it will never fadeso tell me now.” -Apriyati\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 5:
          $("<p>“The love of learning, the sequestered nooks, And all the sweet serenity of books” 	<br>-Martinus</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The love of learning, the sequestered nooks, And all the sweet serenity of books” -Martinus\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 6:
          $("<p>“Here I am, standing in the brink of the dayStaring at the sun that has gone away And a smile upon your face,Make me never wanna leave this place.” 	<br>- Benjamin </p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “I see your eyes blinking, are you a star?But I remember you said you’re a moonSo I should have seen you soon.” -Jordan\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 7:
          $("<p>“nd here we are now,You come to me somehow!” 	<br>- jstaloy,jupiter</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “You are getting closer and closer,But why I feel like a stranger?!” -jstaloy,jupiter\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 8:
          $("<p>“your memories are always with me,Should I tell anyone or should I not,It's the matter of the heart after all,,.” 	<br>- Ronaldo</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Somewhere in my heart,,an arrow pierces trough memories,,Somewhere every pictures dims a little,.” -Robert,albert\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 9:
          $("<p>“Some find happiness in the shades of a new world,,Memories of you.” 	<br>- Rendi</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Hold my hand,,let's remember what we shareUnderstand that I know you really car.” -Novita\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 10:
          $("<p>“Baby that you ever think of me as your best friend,,??Remember all those times, we were best friend??.” 	<br>- Andrew,kevin</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Baby that you ever think of me as your best friend,,??Remember all those times, we were best friend??.” -Andrew,kevin\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 11:
          $("<p>“Now please come down, get lowerI’m on the top of the tower and can’t go higher.” 	<br>- Deshan,Yedija</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “YI have something to say to youI need to tell you, that… I wanna stop loving youe.” -Roy,radith\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 12:
          $("<p>“I wish so much that I could hold youA simple desire,yet so hard to doThis is a love so hopeless,but yet As hard as I try, I can not forget.” 	<br>- Richard,Andi</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “I wish so much that I could hold youA simple desire,yet so hard to doThis is a love so hopeless,but yetAs hard as I try, I can not forget” -Richard,Andi\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 13:
          $("<p>“I want to move on, I try everydayTo get a trip on these feelings and throw them away But everyday I pathetically remain Adoring you amazingly with nothing to gain.” 	<br>- Natanael,Elfriesta</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “I want to move on, I try everyday To get a trip on these feelings and throw them away But everyday I pathetically remain Adoring you amazingly with nothing to gain.” -Nataael,Elfriesta\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 14:
          $("<p>“Education is the kindling of a flame, not the filling of a vessel.” 	<br>- Herianto</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Education is the kindling of a flame, not the filling of a vessel.” -Socrates\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 15:
          $("<p>“Study the past if you would define the future.” 	<br>- Safitri</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Study the past if you would define the future.” -Confucius\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 21:
          $("<p>“In learning you will teach, and in teaching you will learn.” 	<br>- Alfionita</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “In learning you will teach, and in teaching you will learn.” -Phil Collins\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 16:
          $("<p>“We are all failures- at least the best of us are.” 	<br>- J.M. Barrie</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “We are all failures- at least the best of us are.” -J.M. Barrie\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 17:
          $("<p>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” 	<br>- William</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” -William\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 18:
          $("<p>“I have learned all kinds of things from my many mistakes. The one thing I never learn is to stop making them.” 	<br>- Zeinfany</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “I have learned all kinds of things from my many mistakes. The one thing I never learn is to stop making them.” -Joel brasmata\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 19:
          $("<p>“There is creative reading as well as creative writing.” 	<br>- Dhisky Emerson</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “There is creative reading as well as creative writing.” -Dhisky Emerson\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 20:
          $("<p>“Change is the end result of all true learning.” 	<br>- Leoardi</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Change is the end result of all true learning.” -Leoardi\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 22:
          $("<p>“Learning never exhausts the mind.” 	<br>- Leonard sitorus</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learning never exhausts the mind.” -Leonard sitorus\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 23:
          $("<p>“That is what learning is. You suddenly understand something you've understood all your life, but in a new way.” 	<br>- Simon noris</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “That is what learning is. You suddenly understand something you've understood all your life, but in a new way.” -Simon noris\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 24:
          $("<p>“Instruction does much, but encouragement everything.”	<br>- Johann limbong</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Instruction does much, but encouragement everything.” -Johann limbong\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 25:
          $("<p>“I’ve seen how you can’t learn anything when you’re trying to look like the smartest person in the room.” 	<br>- Beri dixon</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “I’ve seen how you can’t learn anything when you’re trying to look like the smartest person in the room.” -Beri dixon\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 26:
          $("<p>“The authority of those who teach is often an obstacle to those who want to learn.” 	<br>-Riska,vanya</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The authority of those who teach is often an obstacle to those who want to learn.” -Riska,vanya\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 27:
          $("<p>“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.” 	<br>-Brainy</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.” -andre\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 28:
          $("<p>“For the things we have to learn before we can do them, we learn by doing them.” 	<br>-wendra</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “For the things we have to learn before we can do them, we learn by doing them.” -Aristepu\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 29:
          $("<p>“Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” 	<br>- Jhansen</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” -Michael\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 30:
          $("<p>“Learned we may be with another man's learning: we can only be wise with wisdom of our own.” 	<br>- Michellee</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learned we may be with another man's learning: we can only be wise with wisdom of our own.” -Michelle\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 31:
          $("<p>“The beautiful thing about learning is nobody can take it away from you.” 	<br>-Jessica</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The beautiful thing about learning is nobody can take it away from you.” -Jessica\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 32:
          $("<p>“People don't get better, they just get smarter. When you get smarter you don't stop pulling the wings off flies, you just think of better reasons for doing it.” 	<br>-Mondy</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “People don't get better, they just get smarter. When you get smarter you don't stop pulling the wings off flies, you just think of better reasons for doing it.” - Andra\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 33:
          $("<p>“A man, though wise, should never be ashamed of learning more, and must unbend his mind.” 	<br>- Cemal Faruk</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “A man, though wise, should never be ashamed of learning more, and must unbend his mind.” -selvi\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 34:
          $("<p>“The lyf so short, the craft so long to lerne.” 	<br>- bella</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The lyf so short, the craft so long to lerne.” -atalia\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 35:
          $("<p>“In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.” 	<br>- Erik takaria</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.” -Erik Takaria\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 36:
          $("<p>“The only things you learn are the things you tame” 	<br>- Antoine de Saint-Exupéry, The Little Prince</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “The only things you learn are the things you tame” -Clara\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 37:
          $("<p>“Learning. To believe you are magnificent. And gradually to discover that you are not magnificent. Enough labor for one human life.” 	<br>- Menda</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learning. To believe you are magnificent. And gradually to discover that you are not magnificent. Enough labor for one human life.” -Andi kemit\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 38:
          $("<p>“Then why do you want to know?” Because learning does not consist only of knowing what we must or we can do, but also of knowing what we could do and perhaps should not do.”	<br>- Ferdinan</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Then why do you want to know?” Because learning does not consist only of knowing what we must or we can do, but also of knowing what we could do and perhaps should not do.”	-Diana\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 39:
          $("<p>“Those who don't know must learn from those who do.” 	<br>- Plato ginting</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Those who don't know must learn from those who do.” -Plato gintig\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 40:
          $("<p>“A person who makes few mistakes makes little progress.” 	<br>- ferando</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “A person who makes few mistakes makes little progress.” -Bryany miquel\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 41:
          $("<p>“Of what a strange nature is knowledge! It clings to a mind when it has once seized on it like a lichen on a rock.” 	<br>- Misnaria</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Of what a strange nature is knowledge! It clings to a mind when it has once seized on it like a lichen on a rock.” -Lorinda\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 42:
          $("<p>“Experience keeps a dear school, but fools will learn in no other, and scarce in that.” 	<br>- franklin</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Experience keeps a dear school, but fools will learn in no other, and scarce in that.” -Arnold Franklin\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 43:
          $("<p>“Success, for most people, requires unlearning as much as learning.” 	<br>- Mion,novaldo</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Success, for most people, requires unlearning as much as learning.” -Evin\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 44:
          $("<p>“Deep in the sea are riches beyond compare. But if you seek safety, it is on the shore.” 	<br>- Vino</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Deep in the sea are riches beyond compare. But if you seek safety, it is on the shore.” -Ivan tunrip\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 45:
          $("<p>“Self-education is the only possible education; the rest is mere veneer laid on the surface of a child's nature.” 	<br>-Nevalia</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Self-education is the only possible education; the rest is mere veneer laid on the surface of a child's nature.” -Nevalia\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 46:
          $("<p>“Learn as if you were not reaching your goal and as though you were scared of missing it” 	<br>- Adriano</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learn as if you were not reaching your goal and as though you were scared of missing it” -Danilo\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 47:
          $("<p>“At a certain level of learning and understanding, right or wrong ain't the issue, but different interest.” 	<br>- Toba dreams</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “At a certain level of learning and understanding, right or wrong ain't the issue, but different interest.” -Toba dreams\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 48:
          $("<p>“Learning is not the accumulation of knowledge, but rather, one thing only: understanding” 	<br>- Maradona</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learning is not the accumulation of knowledge, but rather, one thing only: understanding” -Maradona\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 49:
          $("<p>“Live to learn and you'll learn to live.” 	<br>- Fatima Masood</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Live to learn and you'll learn to live.” -Fatmawati\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 50:
          $("<p>“Feedback is the breakfast of champions” 	<br>- Amanda</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Feedback is the breakfast of champions” -weslie\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 51:
          $("<p>“Learning is by nature curiosity... prying into everything, reluctant to leave anything, material or immaterial, unexplained.” 	<br>- Philo of Alexandra</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Learning is by nature curiosity... prying into everything, reluctant to leave anything, material or immaterial, unexplained.” -randi martin\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 52:
          $("<p>“Had no need of a guide to learn ignorance” 	<br>- cassandara	</p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Had no need of a guide to learn ignorance” -septi hutagaol\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
        case 53:
          $("<p>“Whoever ceases to be a student has never been a student.” 	<br>- Graciia </p>").hide().appendTo(".container div").fadeIn(400);;
          $("<a href=\"http://twitter.com/home?status=Via http://codepen.io/kyokahn/full/meyKBg “Whoever ceases to be a student has never been a student.” -vinny\" target=\"_blank\"><h3><i class=\"fa fa-twitter \" style=\"color:#fff; font-size: 4em;\"></i></h3></a>").appendTo(".container");
          break;
      }
      changeBackground();
    })
  })
})