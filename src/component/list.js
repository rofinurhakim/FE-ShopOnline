function kategoriList () {
    let productCategory = ["ADVENTURE", "ROMANCE", "MAGIC", "HORROR"]
    let htmlCategory=''
    for(let i=0 ; i < productCategory.length; i++)
    {
        htmlCategory += 
        " <li><a><b>" +productCategory[i]+"</b></a></li>"
    }
    return htmlCategory
}

function productList () {
    let productData = [
        {
            id : '1',
            title : 'One Piece',
            category : 'ADVENTURE'

        },
        {
            id : '2',
            title : 'Naruto',
            category : 'ADVENTURE'   
        },
        {
            id : '3',
            title : 'Kimi No Nawa',
            category : 'ROMANCE'
        },
        {
            id : '4',
            title : 'Sword Art Online',
            category : 'MAGIC'

        },
        {
            id : '5',
            title : 'AOT',
            category : 'HORROR'   
        },
        {
            id : '6',
            title : 'Fairy Tale',
            category : 'MAGIC'
        },
        {
            id : '7',
            title : 'Dr. Stone',
            category : 'ADVENTURE'

        },
        {
            id : '8',
            title : 'Kanojo',
            category : 'ROMANCE'   
        },
        {
            id : '9',
            title : 'Class Room',
            category : 'HORROR'
        }

    ]
    let htmlProdukData=''
    for (let i=0 ; i<productData.length; i++)
    {
        htmlProdukData += 
        " <div class='card'>"
        +"<div>"
           + "<p>"+productData[i].title+"</b></p>"
            +"<p>" + productData[i].category+"</p>"
        +"</div>"
    +"</div>"
    }
    return htmlProdukData
} 

document.getElementById("produkdata").innerHTML = productList()
document.getElementById("category").innerHTML = kategoriList()