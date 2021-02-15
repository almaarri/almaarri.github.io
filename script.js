//script for getRoot.html

function main(){
    event.preventDefault();
    //get original word
    let originalWord = document.querySelector('#word').value;
    let arabicRoot = null;
    let description = "So sorry, my programmer did not teach me about that word.";

    //define rules
    //rule 1: 3 consonants
    let rule1 = /[^يوىا]{3}/;
    
    //rule 2: ends in ت
    let rule2 = /ت$/
    
    //rule 3: begins with ت
    let rule3 = /^ت/;

    //rule 4: begins with م
    let rule4 = /^م/;

    //rule 5: 4 consonants
    let rule5 = /[^يوىا]{4}/;

    //rule 6: begins with أ
    let rule6 = /^أ/;

    //rule 7: begins with ي
    let rule7 = /^ي/;

    //rule 8: ends with ون
    let rule8 = /[ون]$/
   
    //begins with است
    let rule9 = /^[است]/
   
    //begins with تست
    let rule10 = /^[تست]/
   
    //begins with يست    
    let rule11 = /^[يست]/
    
    //أ in second position
    let rule12 = /\Wا\W*/
    
    //ا in third position
    let rule13 = /\W{2}ا\W*/
    
    //begins with ن
    let rule14 = /^ن/

    //ends with نا
    let rule15 = /[نا]$/

    //ends with تم
    let rule16 = /[تم]$/

    //define consonants and vowels
    let vowels = ['ي','و','ى','ا'];
    let cononants = ['ن','م','ف','ت'];

    //check for length 3
    if (originalWord.length==3){
    //check for 3 consonants
    if (rule1.test(originalWord)){
        arabicRoot = originalWord;
        description = "This is a triliteral verb in measure I or II, past tense, masculine, third-person singular."
        }//3 consontants if
    }//length 3 if 

    //check for length 4
    else if (originalWord.length===4){

            //rule 5: four consonants
            if(rule5.test(originalWord)){

                //rule 2: ends in ت
                if(rule2.test(originalWord)){
                    arabicRoot = originalWord.slice(0,3);
                    description = "This is a verb in measure I or II, past tense, femine, third-person singular, OR past tense, first-person singular."
                }//rule 2 if

                //rule 3: begins with ت
                else if(rule3.test(originalWord)){
                arabicRoot = originalWord.slice(1);
                description = "This is a verb in measure I or II, singular, present tense, third-person singular feminine OR second person singular."
                }//rule 3 if

                //rule 4: begins with م
                else if(rule4.test(originalWord)){
                arabicRoot = originalWord.slice(1);
                description = "This a noun of place (مفعل)."
                }//rule 4 if

                //quadriliteral root
                else {
                arabicRoot = originalWord;
                description = "This is a quadriliteral verb in measure I or II, past tense, masculine, third-person singular."
                }//else
            }//four consonants if

            //rule 6: begins with أ
            else if(rule6.test(originalWord)){
                arabicRoot = originalWord.slice(1);
                description = "This is a verb in measure I or II, present tense, first-person singular OR second-person imperative."
            } //rule 6 if

            //rule 7: begins with ي
            else if(rule7.test(originalWord)){
                arabicRoot = originalWord.slice(1);
                description = "This is a verb in measure I or II, present tense, third-person singular."
            } //rule 7 if

            //rule 12: أ is second character
            else if(rule12.test(originalWord)){
                arabicRoot = originalWord.slice(0,1)+originalWord.slice(2);
                description = "This is a verb in measure III, past tense, third-person singular."
            } //rule 12 if
            
        }//length 4 if
    
    //check for length 5
    else if (originalWord.length===5){

        //begins with أ, ا in third position
        if (rule13.test(originalWord) && rule3.test(originalWord)){
            arabicRoot = originalWord.slice(1,2)+originalWord.slice(3);
            description = "This is a verb in measure III, present tense, second-person singular."
        }//rules 13&3 if

        //begins with ت, third character is ا
        else if (rule13.test(originalWord) && rule6.test(originalWord)){
            arabicRoot = originalWord.slice(1,2)+originalWord.slice(3);
            description = "This is a verb in measure III, present tense, first-person singular."
        }//rules 13&6 if

        //begins with ن, third character is ا
        else if (rule13.test(originalWord) && rule14.test(originalWord)){
            arabicRoot = originalWord.slice(1,2)+originalWord.slice(3);
            description = "This is a verb in measure III, present tense, first-person plural."
        }//rules 13&14 if     
        
        //ends with ت, second character is ا
        else if (rule2.test(originalWord) && rule12.test(originalWord)){
            arabicRoot = originalWord.slice(0,1)+originalWord.slice(2,4);
            description = "This is a verb in measure III, past tense, first-person singular, second-person singular, or feminine third-person singular."
        }//rules 2&12 if             

    }//length 5 if

    //check for length 6
    else if (originalWord.length===6){
        //begins with ي, ends with ون
        if(rule7.test(originalWord) && rule8.test(originalWord)){
            arabicRoot = originalWord.slice(1,4);
            description = "This is a verb in measure I or II, present tense, third-person plural."
        }//rule 7&8 if

        //begins with ت, ends with ون
        else if(rule3.test(originalWord) && rule8.test(originalWord)){
            arabicRoot = originalWord.slice(1,4);
            description = "This is a verb in measure I or II, present tense, second-person plural."
        }//rules 3&8 if
    
        //measure X
        //begins with است
        else if(rule9.test(originalWord)){
            arabicRoot = originalWord.slice(2,6);
            description = "This is a verb in measure X, infinitive, first-person present tense, or third-person past tense."
        }//rule 9 if

        //begins with تست
        else if(rule10.test(originalWord)){
            arabicRoot = originalWord.slice(2,6);
            description = "This is a verb in measure X, second-person present tense."
        }//rule 10 if

        //begins with يست
        else if(rule11.test(originalWord)){
            arabicRoot = originalWord.slice(2,6);
            description = "This is a verb in measure X, third-person present tense."
        }//rule 10 if

        //ends with نا, second character is ا
        else if (rule15.test(originalWord) && rule12.test(originalWord)){
            arabicRoot = originalWord.slice(0,1)+originalWord.slice(2,4);
            description = "This is a verb in measure III, past tense, first-person plural."
        }//rules 12&15 if
        
        //ends with تم, second character is ا
        else if (rule16.test(originalWord) && rule12.test(originalWord)){
            arabicRoot = originalWord.slice(0,1)+originalWord.slice(2,4);
            description = "This is a verb in measure III, past tense, second-person plural."
        }//rules 12&16 if

    } //length 6 if


    //output
    const firstp = document.getElementById('firstp');
    firstp.textContent = 'Original word: ' + originalWord;
    secondp.textContent = 'Root: ' + arabicRoot;
    wordDescription.textContent = description

}//main

const form = document.getElementById('form');
form.addEventListener('submit', main);

