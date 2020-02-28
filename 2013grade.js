var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final Mid pts (0-35)"))

floatFinPts = parseFloat(prompt("Please enter final pts (0-35)"))

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("enter 1 for leater grade or 2 for passfail"))

if (intGradeOption===2)
{
    if(floatTotalPts >= 90)
    {
        stringFinalGrade = "pass";
    }
    else
    {
        if(floatTotalPts >= 80 && floatTotalPts < 90)
        {
            stringFinalGrade = "pass";
        }
        else
        {
            if(floatTotalPts >= 70 && floatTotalPts < 80)
            {
                stringFinalGrade = "pass";
            }
            else
            {
                if(floatTotalPts >= 60 && floatTotalPts < 70)
                {
                    stringFinalGrade = "fail";
                }
                else
                {
                    if(floatTotalPts < 60)
                    {
                        stringFinalGrade = "fail";
                    }
                }
            }
        }
    }
}

else

if (intGradeOption===1)
{
    if(floatTotalPts >= 90)
    {
        stringFinalGrade = "A";
    }
    else
    {
        if(floatTotalPts >= 80 && floatTotalPts < 90)
        {
            stringFinalGrade = "B";
        }
        else
        {
            if(floatTotalPts >= 70 && floatTotalPts < 80)
            {
                stringFinalGrade = "C";
            }
            else
            {
                if(floatTotalPts >= 60 && floatTotalPts < 70)
                {
                    stringFinalGrade = "D";
                }
                else
                {
                    if(floatTotalPts < 60)
                    {
                        stringFinalGrade = "F";
                    }
                }
            }
        }
    }
}






alert("Your final grade is: " + stringFinalGrade);