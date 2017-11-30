/**
 * Created by Administrator on 2017/9/4.
 */
function getPage(current){
    var pagecount=parseInt($("#pageMaxNum").val());
    current=parseInt(current);

    var html = '<ul>'

    if(pagecount <=1)//1页
    {
        html += '<li data-page="1" onclick="getPage(1);" class="ui-pager">1</li>';
    }
    else {//2页以上
        //prev
        if(current==1){
            html += '<li class="js-page-prev js-page-action ui-page-prev" ><span>Prev</span></li>';
        }else{
            html += '<li class="js-page-prev js-page-action ui-page-prev"><a href="javascript:void(0)" onclick="getPage(' + (current-1)+ ');"><span>Prev</span></a></li>';
        }
        //pages
        if(pagecount>=2 && pagecount<=6){//2-6 页
            for (var i = 1; i <= pagecount; i++) {
                html += '<li data-page="' + i + '"  onclick="getPage(' + i + ');" class="ui-pager">' + i + '</li>'
            }
        }
        else {//大于6页
            html += '<li data-page="1" onclick="getPage(1);" class="ui-pager">1</li>';
            html += '<li data-page="2" onclick="getPage(2);" class="ui-pager">2</li>';
            if (current >= 1 && current <3) {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=3 && current<4)
            {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li data-page="4" onclick="getPage(4);" class="ui-pager">4</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=4 && current<5)
            {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li data-page="4" onclick="getPage(4);" class="ui-pager">4</li>';
                html += '<li data-page="5" onclick="getPage(5);" class="ui-pager">5</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current >= 5 && current <= pagecount - 4) {
                html += '<li>...</li>';
                html += '<li data-page="' + (current - 1) + '" onclick="getPage(' + (current - 1) + ');" class="ui-pager">' + (current - 1) + '</li>';
                html += '<li data-page="' + current + '" onclick="getPage(' + current + ');" class="ui-pager">' + current + '</li>';
                html += '<li data-page="' + (current + 1) + '" onclick="getPage(' + (current + 1) + ');" class="ui-pager">' + (current + 1) + '</li>';
                html += '<li class="ui-paging-ellipse" class="ui-pager">...</li>';
            }
            else if (current >= pagecount - 3 && current < pagecount-2)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-4) + '" onclick="getPage(' + (pagecount-4) + ');" class="ui-pager">' + (pagecount-4) + '</li>';
                html += '<li data-page="' + (pagecount-3) + '" onclick="getPage(' + (pagecount-3) + ');" class="ui-pager">' + (pagecount-3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            else if (current >= pagecount - 2 && current < pagecount-1)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-3) + '" onclick="getPage(' + (pagecount-3) + ');" class="ui-pager">' + (pagecount-3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            else
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            html += '<li data-page="' + (pagecount-1) + '" onclick="getPage(' + (pagecount-1) + ');" class="ui-pager">' + (pagecount-1) + '</li>';
            html += '<li data-page="' + pagecount + '" onclick="getPage(' + pagecount + ');" class="ui-pager">' + pagecount + '</li>';
        }

        //next
        if(current == pagecount){
            if(current!=1){
                html += '<li class="js-page-next js-page-action ui-page-next"><span>Next</span></li>';
            }
        }else{
            html += '<li class="js-page-next js-page-action ui-page-next" ><a href="javascript:void(0)" onclick="getPage(' + (current+1)+ ');"><span>Next</span></a></li>';
        }
    }
    html += '</ul>';

    $(".ui-paging-container").html(html);

    for (var i = 1; i <= pagecount; i++) {
        if(current==i){
            //alert("page_table_"+i);
            $("#page_table_"+i).show();
        }else{
            $("#page_table_"+i).hide();
        }
    }

    if (current == 1) {
        $('.js-page-prev', $(".ui-paging-container")).addClass('ui-pager-disabled ui-prev-disabled');
    }
    if (current == pagecount) {
        $('.js-page-next', $(".ui-paging-container")).addClass('ui-pager-disabled ui-next-disabled');
    }
    $(".ui-paging-container").find('li[data-page="' + current + '"]').addClass('focus').siblings().removeClass('focus');

    goTop();
}


function goTop(acceleration, time) {
    acceleration = acceleration || 10;
    time = time || 0;

    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var	y2 = 0;
    var x3 = 0;
    var y3 = 0;

    if(document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if(document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }

    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于1 的数, 所以滚动距离会越来越小

    var speed = 1 + acceleration;
    window.scrollTo(Math.floor(x/speed), Math.floor(y/speed));

    // 如果距离不为, 继续调用迭代本函数

    if(x > 0 || y > 0) {
        var invokeFunction = "goTop("+ acceleration + ", "+ time + ")";
        window.setTimeout(invokeFunction, time);
    }
}

function getPage(current){
    var pagecount=parseInt($("#pageMaxNum").val());
    current=parseInt(current);

    var html = '<ul>';
    if(pagecount==1){
        html = '';
    }else{
        if(current==1){
            html += '<li class="js-page-prev js-page-action ui-page-prev" ><span>Prev</span></li>';
        }else{
            html += '<li class="js-page-prev js-page-action ui-page-prev" onclick="getPage(' + (current-1)+ ');"><span>Prev</span></li>';
        }

        if (pagecount > 6) {
            html += '<li data-page="1" onclick="getPage(1);" class="ui-pager">1</li>';
            html += '<li data-page="2" onclick="getPage(2);" class="ui-pager">2</li>';
            if (current >= 1 && current <3) {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=3 && current<4)
            {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li data-page="4" onclick="getPage(4);" class="ui-pager">4</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=4 && current<5)
            {
                html += '<li data-page="3" onclick="getPage(3);" class="ui-pager">3</li>';
                html += '<li data-page="4" onclick="getPage(4);" class="ui-pager">4</li>';
                html += '<li data-page="5" onclick="getPage(5);" class="ui-pager">5</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current >= 5 && current <= pagecount - 4) {
                html += '<li>...</li>';
                html += '<li data-page="' + (current - 1) + '" onclick="getPage(' + (current - 1) + ');" class="ui-pager">' + (current - 1) + '</li>';
                html += '<li data-page="' + current + '" onclick="getPage(' + current + ');" class="ui-pager">' + current + '</li>';
                html += '<li data-page="' + (current + 1) + '" onclick="getPage(' + (current + 1) + ');" class="ui-pager">' + (current + 1) + '</li>';
                html += '<li class="ui-paging-ellipse" class="ui-pager">...</li>';
            }
            else if (current >= pagecount - 3 && current < pagecount-2)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-4) + '" onclick="getPage(' + (pagecount-4) + ');" class="ui-pager">' + (pagecount-4) + '</li>';
                html += '<li data-page="' + (pagecount-3) + '" onclick="getPage(' + (pagecount-3) + ');" class="ui-pager">' + (pagecount-3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            else if (current >= pagecount - 2 && current < pagecount-1)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-3) + '" onclick="getPage(' + (pagecount-3) + ');" class="ui-pager">' + (pagecount-3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            else
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-2) + '" onclick="getPage(' + (pagecount-2) + ');" class="ui-pager">' + (pagecount-2) + '</li>';
            }
            html += '<li data-page="' + (pagecount-1) + '" onclick="getPage(' + (pagecount-1) + ');" class="ui-pager">' + (pagecount-1) + '</li>';
            html += '<li data-page="' + pagecount + '" onclick="getPage(' + pagecount + ');" class="ui-pager">' + pagecount + '</li>';
        } else {
            for (var i = 1; i <= pagecount; i++) {
                html += '<li data-page="' + i + '"  onclick="getPage(' + i + ');" class="ui-pager">' + i + '</li>';
            }
        }
        if(current == pagecount){
            html += '<li class="js-page-next js-page-action ui-page-next"><span>Next</span></li>';
        }else{
            html += '<li class="js-page-next js-page-action ui-page-next" onclick="getPage(' + (current+1)+ ');"><span>Next</span></li>';
        }
    }
    html += '</ul>';
    if(pagecount==1){
        html = '';
    }
    $(".ui-paging-container").html(html);

    for (var i = 1; i <= pagecount; i++) {
        if(current==i){
            //alert("page_table_"+i);
            $("#page_table_"+i).show();
        }else{
            $("#page_table_"+i).hide();
        }
    }

    if (current == 1) {
        $('.js-page-prev', $(".ui-paging-container")).addClass('ui-pager-disabled ui-prev-disabled');
    }
    if (current == pagecount) {
        $('.js-page-next', $(".ui-paging-container")).addClass('ui-pager-disabled ui-next-disabled');
    }
    $(".ui-paging-container").find('li[data-page="' + current + '"]').addClass('focus').siblings().removeClass('focus');

    goTop();
}

function toPage(current){
    var pagecount=parseInt($("#pageMaxNum").val());
    current=parseInt(current);
    function composePageLink(page, text) {
        text = text || page;
        if (page == current) {
            return text;
        } else {
            var search = location.search;
            if (/\bpage=\d+/.test(search)) {
                search = search.replace(/\bpage=\d+/, 'page=' + page);
            } else if (search) {
                search += '&page=' + page;
            } else {
                search += '?page=' + page;
            }
            return '<a href="' + location.pathname + search + '">' + text + '</a>';
        }
    }
    var html = '<ul>';
    if(pagecount==1){
        html = '';
    }else{
        if(current==1){
            html += '<li class="js-page-prev js-page-action ui-page-prev"><span>Prev</span></li>';
        }else{
            html += '<li class="js-page-prev js-page-action ui-page-prev">' + composePageLink(current - 1, '<span>Prev</span>') + '</li>';
        }

        if (pagecount > 6) {
            html += '<li data-page="1" class="ui-pager">' + composePageLink(1) + '</li>';
            html += '<li data-page="2" class="ui-pager">' + composePageLink(2) + '</li>';
            if (current >= 1 && current <3) {
                html += '<li data-page="3" class="ui-pager">' + composePageLink(3) + '</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=3 && current<4)
            {
                html += '<li data-page="3" class="ui-pager">' + composePageLink(3) + '</li>';
                html += '<li data-page="4" class="ui-pager">' + composePageLink(4) + '</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current>=4 && current<5)
            {
                html += '<li data-page="3" class="ui-pager">' + composePageLink(3) + '</li>';
                html += '<li data-page="4" class="ui-pager">' + composePageLink(4) + '</li>';
                html += '<li data-page="5" class="ui-pager">' + composePageLink(5) + '</li>';
                html += '<li class="ui-paging-ellipse">...</li>';
            }
            else if (current >= 5 && current <= pagecount - 4) {
                html += '<li>...</li>';
                html += '<li data-page="' + (current - 1) + '" class="ui-pager">' + composePageLink(current - 1) + '</li>';
                html += '<li data-page="' + current + '" class="ui-pager">' + current + '</li>';
                html += '<li data-page="' + (current + 1) + '" class="ui-pager">' + composePageLink(current + 1) + '</li>';
                html += '<li class="ui-paging-ellipse" class="ui-pager">...</li>';
            }
            else if (current >= pagecount - 3 && current < pagecount-2)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-4) + '" class="ui-pager">' + composePageLink(pagecount - 4) + '</li>';
                html += '<li data-page="' + (pagecount-3) + '" class="ui-pager">' + composePageLink(pagecount - 3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" class="ui-pager">' + composePageLink(pagecount - 2) + '</li>';
            }
            else if (current >= pagecount - 2 && current < pagecount-1)
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-3) + '" class="ui-pager">' + composePageLink(pagecount - 3) + '</li>';
                html += '<li data-page="' + (pagecount-2) + '" class="ui-pager">' + composePageLink(pagecount - 2) + '</li>';
            }
            else
            {
                html += '<li class="ui-paging-ellipse">...</li>';
                html += '<li data-page="' + (pagecount-2) + '" class="ui-pager">' + composePageLink(pagecount - 2) + '</li>';
            }
            html += '<li data-page="' + (pagecount-1) + '" class="ui-pager">' + composePageLink(pagecount - 1) + '</li>';
            html += '<li data-page="' + pagecount + '" class="ui-pager">' + composePageLink(pagecount) + '</li>';
        } else {
            for (var i = 1; i <= pagecount; i++) {
                html += '<li data-page="' + i + '" class="ui-pager">' + composePageLink(i) + '</li>';
            }
        }
        if(current == pagecount){
            html += '<li class="js-page-next js-page-action ui-page-next"><span>Next</span></li>';
        }else{
            html += '<li class="js-page-next js-page-action ui-page-next">' + composePageLink(current + 1, '<span>Next</span>') + '</li>';
        }
    }
    html += '</ul>';
    if(pagecount==1){
        html = '';
    }
    $(".ui-paging-container").html(html);

    for (var i = 1; i <= pagecount; i++) {
        if(current==i){
            //alert("page_table_"+i);
            $("#page_table_"+i).show();
        }else{
            $("#page_table_"+i).hide();
        }
    }

    if (current == 1) {
        $('.js-page-prev', $(".ui-paging-container")).addClass('ui-pager-disabled ui-prev-disabled');
    }
    if (current == pagecount) {
        $('.js-page-next', $(".ui-paging-container")).addClass('ui-pager-disabled ui-next-disabled');
    }
    $(".ui-paging-container").find('li[data-page="' + current + '"]').addClass('focus').siblings().removeClass('focus');
}