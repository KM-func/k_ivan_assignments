
$(document).ready(function(){
    // document.getElementById("hello").innerText = "<span>Hello Pogi</span>";
    


    $("#mia").click(function(){
        $("#profile-sprites").attr("src","./imgs/Mia_Fey.png");
        $("#character-name").html("Mia Fey");
        $("#char-description").html("Mia Fey was a defense attorney known for her undying belief in her clients. She started out at Grossberg Law Offices, then eventually created her own criminal defense law firm, Fey & Co. Law Offices. She was Phoenix Wright's boss and mentor, and she left her firm to him after her death at the hands of Redd White. Her younger sister Maya served as Wright's assistant during his law career, and would sometimes use her spirit channeling abilities to allow Mia to assist Wright. ");
      });
    $("#maya").click(function(){
        $("#profile-sprites").attr("src","./imgs/Maya_Fey.png");
        $("#character-name").html("Maya Fey");
        $("#char-description").html("Maya Fey is the Master of the Kurain Channeling Technique and, subsequently, the head of the Fey clan. A close friend of defense attorney Phoenix Wright, she was his primary assistant for the majority of his career between the years 2016 and 2019, mainly by participating in his investigations and providing co-counseling duties during trials.");
      });
    $("#larry").click(function(){
        $("#profile-sprites").attr("src","./imgs/Larry_Butz.png");
        $("#character-name").html("Larry Butz");
        $("#char-description").html("Larry Butz is Phoenix Wright's oldest friend and first client, and a childhood friend of Miles Edgeworth as well. Overemotional and unmotivated, he has been involved in Wright's and Edgeworth's investigations from time to time, nearly always appearing with a different occupation and clothing");
      });
    $("#miles").click(function(){
        $("#profile-sprites").attr("src","./imgs/Miles_Edgeworth.png");
        $("#character-name").html("Miles Edgeworth");
        $("#char-description").html("Miles Edgeworth is a Chief Prosecutor of the prosecutor's office. During his first four years as a prosecutor, he had a perfect win record in trials and was willing to do just about anything to get a guilty verdict for the defendant. His defeat in court at the hand of his childhood friend Phoenix Wright was the beginning of a series of seismic shifts in his attitude concerning his profession. He even quit twice, only to return each time with a fresh outlook on how he conducted his life.");
      });
    $("#gumshoe").click(function(){
        $("#profile-sprites").attr("src","./imgs/Dick_Gumshoe.png");
        $("#character-name").html("Dick Gumshoe");
        $("#char-description").html("Dick Gumshoe is a homicide detective at the police department. He usually works with Prosecutor Miles Edgeworth, but has also worked under Manfred and Franziska von Karma, Winston Payne, Godot, Shi-Long Lang, Sebastian Debeste, and Klavier Gavin. He has been in charge of most of the cases that Phoenix Wright took on before the latter's disbarment, mostly due to the fact that most of Wright's cases pit him against Gumshoe's prosecutor colleagues. He generally takes care of the initial investigation, and is usually the first to take the stand during a trial to testify and give basic facts about a case.");
      });


    });