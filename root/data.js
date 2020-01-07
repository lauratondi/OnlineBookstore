var app=new Vue({
    el:"#app",
    data:{
        books:[],
        cover:[],
        title:[],
        description:[],
        more_info:[],
        detail:[],
        searchBox:"",
        message:"Book not found!"
    },

    created(){
        this.logic();
    },

    methods:{
        
        async logic(){
        var url="https://api.myjson.com/bins/zyv02"

        this.books= await fetch(url,{
            method:"GET",
          })

   .then(response=>response.json())
    .then(data=>data.books)
    .catch(error=>console.log(error))
    

     console.log(this.books)
    },

    },

    computed:{
        filteredBooks: function(){
            // console.log(this.searchBox)
            return this.books.filter((book)=>{
                return book.title.toLowerCase().match(this.searchBox) || book.description.includes(this.searchBox) || this.searchBox == ""
            }); 
        }    
    
    }
    
})


  
