const myDiv = $('#btnDiv');
const counter = 10;

$('#upload').on('click', function()
{
    $(myDiv).hide(1000);

    $.ajax(
        {
            url : 'https://jsonplaceholder.typicode.com/posts',
            dataType : 'json',
            type: 'get'
        })
        .done(function(res)
        {
            let con = $('<div></div>');
            con.addClass('container');
            let full = $('<div></div>');
            full.addClass('row');
            res.forEach(function(el)
            {
                    
                let elem = showComments(el.title, el.body, el.id, full, counter);
                $(full).append(elem);
        })


        $(con).append(full);
        $('body').append(con);
        })
        .fail(function()
        {
            let warn = '<div class="info"><div class="icon icon-warning"><i class="material-icons">warning</i></div>';
            warn += '<h4 class="info-title">Warning !</h4>';
            warn += '<p>Oops, something went wrong. Error connecting to the server. Please try again later</p>';
            warn += '<a  href="index.html" id="upload" class="btn btn-warning">Refresh</a></div>';
            console.warn('Warning: Can not connect');
            $('body').append(warn);
        })
})


function showComments(title, elembd,id,  full, limit)
{
    if(id <= limit)
    {
        let col = $('<div></div>');
        col.addClass('col-md-6');
        let card = $('<div></div>');
        card.addClass('card');
        let head = $('<div></div>');
        head.addClass('card-header');
        head.addClass('card-header-info');
        let text = $('<div></div>');
        text.addClass('card-text');
        let h4 = $('<h4></h4>');
        h4.addClass('card-title');
        h4.text(title);
        let icon = $('<i></i>');
        icon.addClass('material-icons');
        icon.css('cursor','pointer');
        icon.text('remove_red_eye');
        let body = $('<div></div>');
        body.addClass('card-body');
        body.text(elembd);

        text.append(h4);
        text.append(icon);
        head.append(text);
        card.append(head);
        card.append(body)
        col.append(card);
        $(full).append(col);

        $(icon).on('click', function()
        {
            $(body).stop().toggle(1000);
        })

        $(full).append(col);
        return col;
    }
    
}