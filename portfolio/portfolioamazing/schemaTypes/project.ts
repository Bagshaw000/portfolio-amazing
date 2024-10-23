import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string"
        }),
        defineField({
            name:"client",
            title:"Client",
            type:"string"
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"string",
            initialValue: "content",
            options:{
                list:[
                    {title:"Conten Creation", value:"content"}
                ]
            }
        })
     
    ]

})