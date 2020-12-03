$(document).ready(function () {

    var studentData = {};

    $("#submit").click(submitData);

    function submitData(event) {
        event.preventDefault();

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var pointsEarned = $("#pointsEarned").val();
        var pointsPoss = $("#pointsPoss").val();

        studentData.firstName = firstName;
        studentData.lastName = lastName;
        studentData.pointsEarned = pointsEarned;
        studentData.pointsPoss = pointsPoss;

        var percent = (studentData.pointsEarned / studentData.pointsPoss) * 100;
        var percent2 = percent.toFixed(2);
        var grade;


        if (percent2 >= 90.00) {
            grade = "A";
        } else if (percent2 <= 89.00) {
            grade = "B";
        } else if (percent2 <= 79.00) {
            grade = "C";
        } else if (percent2 <= 69.00) {
            grade = "D";
        } else {
            grade = "F";
        }


        $("#name").text(studentData.firstName + " " + studentData.lastName);
        $("#percentage").text(percent2 + "%");
        $("#grade").text("Grade: " + grade);

    }

});