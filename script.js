$(document).ready(function() {
    let index = -1;
    const rows = $('table tr').not(":first");
    
    $('#btn-next').click(function() {
        index = (index + 1) % rows.length;

        if (index === 0) {
            rows.css("color", "black");
            rows.eq(index).css("color", "red");
        }
        if (index > 0) {
            rows.eq(index-1).css("color", "black");
            rows.eq(index).css("color", "red");
        }
    });
});