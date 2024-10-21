
const themeButton = document.querySelector('.Btn');
const moonIcon = document.getElementById('icon-moon');

let isBlueTheme = localStorage.getItem('theme') === 'blue' || localStorage.getItem('theme') === null;

function toggleTheme(){
        if (isBlueTheme) {
            themeButton.style.backgroundColor = '#fa0202';
            document.querySelector('.navbar-nav').style.backgroundColor = '#d31010';
            document.querySelector('.heading').style.color = '#d31010';
            document.querySelectorAll('.form-btn').forEach(btn => {
                btn.style.background = 'linear-gradient(45deg, #d31010 0%, #fa4a4a 100%)';
            });
            document.querySelectorAll('.input').forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.color = '#fa0202';
                    input.style.borderInlineColor = '#fa0202';
                })
                input.addEventListener('blur', () => {
                    input.style.borderInlineColor = 'transparent';
                });
            });
            document.querySelectorAll('.radio-container .radio input + name').forEach(radio => {
                radio.addEventListener('checked', function() {
                    radio.style.color = '#fa0202';
                });
            });

            localStorage.setItem('theme', 'red');
        } else {
            themeButton.style.backgroundColor = '#1089d3';
            document.querySelector('.navbar-nav').style.backgroundColor = '#1088d3';
            document.querySelector('.heading').style.color = '#1089d3';
            document.querySelectorAll('.form-btn').forEach(btn => {
                btn.style.background = 'linear-gradient(45deg, #1089d3 0%, #12b1d1 100%)';
            });
            document.querySelectorAll('.input').forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.color = '#12b1d1';
                    input.style.borderInlineColor = '#12b1d1';
                })
                input.addEventListener('blur', () => {
                    input.style.borderInlineColor = 'transparent';
                });
            });

            localStorage.setItem('theme', 'blue');
        }
        isBlueTheme = !isBlueTheme;
}
themeButton.addEventListener("click", toggleTheme);

if(document.getElementById("btn-calculate")){
    const btn_calculate = document.getElementById("btn-calculate");
    btn_calculate.addEventListener("click", () => {
        let numberStr = document.getElementById("numbers").value;

        if(numberStr == ""){
            alert("You must enter numbers separate by space");
        }
        else{
            let numbers = numberStr.trim();
            let numberArr = numbers.split(" ").map(Number);

            var result = 0;
            if(document.getElementById("sum").checked){
                for(let i = 0; i < numberArr.length; i++){
                    result += numberArr[i];
                }
            }
            else if(document.getElementById("avg").checked){
                for(let i = 0; i < numberArr.length; i++){
                    result += numberArr[i];
                }
                result = result / numberArr.length;
            }
            else if (document.getElementById("max").checked){
                numberArr.sort((a, b) => a - b)
                result = numberArr[numberArr.length - 1]
            }
            else if (document.getElementById("min").checked){
                numberArr.sort((a, b) => a - b)
                console.log(numberArr);
                result = numberArr[0];
            }

            document.getElementById("result").value = result;
        }
    });
}

if(document.getElementById("btn-login")){
    const btn_login = document.getElementById("btn-login");
    btn_login.addEventListener("click", () => {
        /* Get input value */
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const emailAdress = document.getElementById("emailAdress").value;
        const adress = document.getElementById("adress").value;
        const city = document.getElementById("city").value;
        const province = document.getElementById("province").value;

        /* Get input radio */
        const membership = document.getElementsByName("radio");
        var selectedValue;
        for (radio of membership) {
            if (radio.checked) {
                selectedValue = radio.value;
                break;
            }
        }

        /* Print information */
        document.getElementById("title").innerHTML = "Your information";
    
        let input_div = document.getElementById("input_div");
        input_div.style.display = "none";
        let output_div = document.getElementById("output_div");
        output_div.style.display = "block";

        let output_fullName = document.getElementById("output-fullName");
        output_fullName.value = firstName + " " + lastName;
        
        let output_emailAdress = document.getElementById("output-email");
        output_emailAdress.value = emailAdress;

        let output_adress = document.getElementById("output-adress");
        output_adress.value = adress + ". " + city + ", " + province;

        let output_membership = document.getElementById("output-membership");
        output_membership.value = selectedValue + " membership";
    });
}


function applySavedTheme() {
    if (localStorage.getItem('theme') === 'blue') {
        isBlueTheme = false;
        toggleTheme();
    } else {
        isBlueTheme = true;
        toggleTheme();
    }
}

applySavedTheme();