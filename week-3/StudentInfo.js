const dateofbirth= "19/09/2004"

const getStudentName=  ()  =>
{
    return "Write your name here"
}
const getCampusName=   ()   =>
{
    return ("UEL Campus")
}

//experting variables
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob=dateofbirth
//exporting function with parameter
exports.Studentgrade=(marks) =>
{
    if (marks>50 && marks<70) return ("B grade ")
        else
    return ("A grade")
}