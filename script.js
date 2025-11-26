$(document).ready(function() {
    let index = -1;
    const rows = $('table tr').not(":first");
    
    $('#btn-next').click(function() {
        if (index === -1 || index === 0) {
            rows.css("color", "black");
            index = 0;
            rows.eq(index).css("color", "red");
            index++;
        }
        else {
            rows.eq(index-1).css("color", "black");
            rows.eq(index).css("color", "red");
            index = (index + 1) % rows.length;
        }
    });
});