//this is being built

//(function(){
//  document.getElementById("submit").addEventListener("click", getLCI);/
//})

function getLCI() {
        var userinput = document.getElementById("fname").value;
          
        var calculated = userinput;// * 2;

          
          console.log(calculated);
          //alert("quit touchin me");
          //alert(calculated)
          //alert(sex18)
          //alert(mstatus)
        }


  function calculate(f) {
    var R3500900 = document.getElementById("q1").value;
    var S0921200 = document.getElementById("q2").value;
    var R2602100 = document.getElementById("q3").value;
    var S1542000 = document.getElementById("q4").value;
    var T6216501 = document.getElementById("q5").value;
    var E8013403 = document.getElementById("q6").value;
    var R0070700 = document.getElementById("q7").value;
    var S3594800 = document.getElementById("q8").value;
    var E7013407 = document.getElementById("q9").value;
    var R1487700 = document.getElementById("q10").value;

// LCI_number has changed, all the values are different ##########

    LCI_number = .982903140149 + ((R3500900 * 0.625952156134) + 
                        (S0921200 * -0.26999461452) + 
                        (R2602100 * 0.149599386981) + 
                        (S1542000 * 0.0944540254272) + 
                        (T6216501 * 0.0153368428256) + 
                        (E8013403 * 0.00695764143686) + 
                        (R0070700 * 0.114337295203) + 
                        (S3594800 * 0.0177590900125) + 
                        (E7013407 * 0.433238195882) + 
                        (R1487700 * 0.0794426357405))
    
    f.FinalLCI.value=LCI_number;
  }

// end of changes to LCI_number ###################################

//  LCI_number = .964938 + ((Sex_Before)*0.5979475) + ().....

// R3500900 * 0.5979475274935839
// Have you had sex in the last month?

// S0921200 * -0.2559144509075464
// How much were you down in the dumps last month?

// R2602100 * 0.14953587653537467
// On a scale of 0 to 3 indicate your substance use in the past month (0 is none).

// S1542000 * 0.09574040321870364
// What was your relationship to your household parent figure?

// T6216501 * 0.017434512445894966
// When I was in school, I used to break rules quite regularly.

// E8013403 * 0.006967127432214822
// Were you arrested this month?  And have you ever been arrested since turning 12?

// R0070700 * 0.10146733512240146
// What percentage of your peers belonged to a gang when you were 16?

// S3594800 * 0.01703116931508945
// How many miles away did your father live when you were in your early 20s?

// E7013407 * 0.4314405704353124
// Marital status in month 7 of 2014 (early 20s).

// R1487700 * 0.08036419897561888
// What is you delinquency score?
