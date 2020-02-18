{
    var gender, weight, ABSRPU, lowerLimit, nauseaLimit, upperLimit, difference, proportion, proportionTool;

    var maleConstant = 0.68;
    var femaleConstant = 0.55;

    var maleAvg = 0.033;
    var femaleAvg = 0.05;

    var disappear = document.getElementById("disappearingAct");

    const genderMale = document.getElementById('male');
    const genderFemale = document.getElementById( 'female');

    const maleOptionBorder = document.getElementById('maleOptionBorder')
    const femaleOptionBorder = document.getElementById('femaleOptionBorder')

    var lowerLimitDiv = document.getElementById("lowerLimit");
    var nauseaLimitDiv = document.getElementById("nauseaLimit");
    var upperLimitDiv = document.getElementById("upperLimit");

    var tOne = document.getElementById("pOne");
    var tTwo = document.getElementById("pTwo");
    var tThree = document.getElementById("pThree");
    var tFour = document.getElementById("pFour");

    var userMeasure = document.getElementById("userMeasure");
    var totalMeasure = document.getElementById("totalMeasure");
    var tooltip = document.getElementById("tooltip");
    var tooltipText = document.getElementById("tooltiptext");
    var percentTag = document.getElementById("percentTag");
    var indicator = document.getElementById("aboveBelow")
     
    const weightInput = document.getElementById('weight');

    genderMale.addEventListener('click', function(){
        if (gender == null){
            maleOptionBorder.style.borderColor = '#0BB2DA';
            gender = 'male';
            checkNull();
        } else {
            maleOptionBorder.style.borderColor = '#0BB2DA';
            femaleOptionBorder.style.borderColor = 'rgba(254,179,43, 0)';
            gender = 'male';
            checkNull();
        } 
    })

    genderFemale.addEventListener('click', function(){
        if (gender == null){
            femaleOptionBorder.style.borderColor = '#F935AA';
            gender = 'female';
            checkNull();
        } else {
            maleOptionBorder.style.borderColor = 'rgba(11,178,218, 0)';
            femaleOptionBorder.style.borderColor = '#F935AA';
            gender = 'female';
            checkNull();
        } 
    })

    weightInput.addEventListener('keyup', function(){
        weight = weightInput.value;
        weight = weight * 1000;
        console.log(weight)
        checkNull();
    })

    function checkNull(){
        if (gender != null && weight != null && weight >= 10){
            createInformation();
        } else {
            console.log('Incomplete Infomation')
        }
    }

    function createInformation(){
        if (gender == "male"){
            ABSRPU = ((19)/(maleConstant * weight)) * 100 ;
            console.log(ABSRPU);
            totalMeasure.style.background = "#C1DDF7"
            userMeasure.style.background = "#2F9BFF"
            tooltipText.style.background = "#2F9BFF"
            document.styleSheets[0].addRule('.tooltip .tooltiptext::after','border-color: #2F9BFF transparent transparent transparent !important;');

            if (ABSRPU > maleAvg){
                difference = ABSRPU - maleAvg;
                proportion = difference / maleAvg;
                proportion = 50 - (50 * proportion);
                console.log("Here xx" + proportion)
                var entry = Math.ceil(proportion);
                entry = entry.toString();
                percentTag.innerHTML = entry + "%";
                proportion = proportion * 0.01;
                var barwidth = totalMeasure.clientWidth;
                proportion = proportion * barwidth;
                proportion = proportion.toString();
                proportionTool = proportion - 14;
                proportionTool = proportionTool + "px"
                proportion = proportion + "px"
                indicator.innerHTML = "Below Average"
            } else {
                difference = maleAvg - ABSRPU;
                proportion = difference / maleAvg;
                proportion = (50 * proportion) + 50;
                var entry = Math.ceil(proportion);
                entry = entry.toString();
                percentTag.innerHTML = entry + "%";
                proportion = proportion * 0.01;
                var barwidth = totalMeasure.clientWidth;
                proportion = proportion * barwidth;
                proportion = proportion.toString();
                proportionTool = proportion - 14;
                proportionTool = proportionTool + "px"
                proportion = proportion + "px"
                indicator.innerHTML = "Above Average"
            }
        } else {
            ABSRPU = ((19)/(femaleConstant * weight)) * 100;
            console.log(ABSRPU);

            totalMeasure.style.background = "#F6CEDF"
            userMeasure.style.background = "#FF3986"
            tooltipText.style.background = "#FF3986"
            document.styleSheets[0].addRule('.tooltip .tooltiptext::after','border-color: #FF3986 transparent transparent transparent !important;');

            if (ABSRPU > femaleAvg){
                difference = ABSRPU - femaleAvg;
                proportion = difference / femaleAvg;
                proportion = 50 - (50 * proportion);
                console.log("Here xx" + proportion)
                var entry = Math.ceil(proportion);
                entry = entry.toString();
                percentTag.innerHTML = entry + "%";
                proportion = proportion * 0.01;
                var barwidth = totalMeasure.clientWidth;
                proportion = proportion * barwidth;
                proportion = proportion.toString();
                proportionTool = proportion - 14;
                proportionTool = proportionTool + "px"
                proportion = proportion + "px"
                indicator.innerHTML = "Below Average"
            } else {
                difference = femaleAvg - ABSRPU;
                proportion = difference / femaleAvg;
                proportion = (50 * proportion) + 50;
                var entry = Math.ceil(proportion);
                entry = entry.toString();
                percentTag.innerHTML = entry + "%";
                proportion = proportion * 0.01;
                var barwidth = totalMeasure.clientWidth;
                proportion = proportion * barwidth;
                proportion = proportion.toString();
                proportionTool = proportion - 14;
                proportionTool = proportionTool + "px"
                proportion = proportion + "px"
                indicator.innerHTML = "Above Average"
            }
        }

        determineLimits();
    }

    function determineLimits(){
        lowerLimit = Math.ceil(0.099 / ABSRPU);
        nauseaLimit = Math.ceil(0.199 / ABSRPU);
        upperLimit = Math.ceil(0.249 / ABSRPU);

        console.log(lowerLimit + ", " + nauseaLimit + ", " + upperLimit);

        implementInformation();
    }

    function implementInformation(){
        lowerLimitDiv.innerHTML = lowerLimit;
        nauseaLimitDiv.innerHTML = nauseaLimit;
        upperLimitDiv.innerHTML = upperLimit;

        tOne.innerHTML = "Up to " + lowerLimit + " cans (4.5% alc. / 19g ethanol per can) 😊";
        tTwo.innerHTML = "Up to " + nauseaLimit + " cans 😄";
        tThree.innerHTML = "Up to " + upperLimit + " cans 🤮";
        tFour.innerHTML = "Over " + upperLimit + " cans 😵";

        disappear.style.display = "block";
        setTimeout( function(){
            disappear.style.opacity = "1";
            setTimeout(function(){
                userMeasure.style.width = proportion;
                tooltip.style.marginLeft = proportionTool;
                tooltip.style.opacity = "1";
            }, 300)
        }, 300)
    }
}