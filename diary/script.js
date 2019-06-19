function add_note(item)
{
    create_note(item["date"].value, item["title"].value, item["desc"].value, item["files"].files);
    return false;
}
function create_note(date, title, desc, files)
{
    var d = document.createElement("div");
    d.className = "gen_note note";
    var f = document.createElement("form");
    f.name = "edit_note";
    d.appendChild(f);
    
    var i = document.createElement("div");
    i.className = "gen_label n_label";
    i.textContent = "Date:";
    f.appendChild(i);
    
    i = document.createElement("input");
    i.type = "date";
    i.className = "gen_input n_input";
    i.required = true;
    i.disabled = true;
    i.value = date;
    f.appendChild(i);

    i = document.createElement("hr");
    i.className = "gen_hr n_hr";
    f.appendChild(i);

    i = document.createElement("div");
    i.className = "gen_label n_label";
    i.textContent = "Title:";
    f.appendChild(i);

    i = document.createElement("textarea");
    i.className = "gen_input n_input";
    i.required = true;
    i.disabled = true;
    i.rows = "1";
    i.textContent = title;
    f.appendChild(i);

    i = document.createElement("hr");
    i.className = "gen_hr n_hr";
    f.appendChild(i);

    var i = document.createElement("div");
    i.className = "gen_label n_label";
    i.textContent = "Description:";
    f.appendChild(i);

    i = document.createElement("textarea");
    i.className = "gen_input n_input";
    i.disabled = true;
    i.rows = "4";
    i.textContent = desc;
    f.appendChild(i);

    i = document.createElement("input");
    i.type = "submit";
    i.classList = "gen_button n_button";
    i.value = "Edit note";
    f.appendChild(i);

    if (files.length != 0)
    {
        i = document.createElement("hr");
        i.className = "gen_hr n_hr";
        f.appendChild(i);

        Array.from(files).forEach(file => {
            if (file.type.match("^image"))
            {
                i = document.createElement("img");
                i.className = "n_media";
                i.src = URL.createObjectURL(file);
                i.alt = file.name;
                f.appendChild(i);
            }
            if (file.type.match("^video")) 
            {
                var v = document.createElement("video");
                v.className = "n_media";
                v.controls = true;
                v.textContent = "Error, video not supported.";
                i = document.createElement("source");
                i.className = "n_media";
                i.src = URL.createObjectURL(file);
                i.type = file.type;
                v.appendChild(i);
                f.appendChild(v);
            }
        })
    }

    i = document.getElementsByClassName("content");
    i = i[0];
    i.appendChild(d);
}