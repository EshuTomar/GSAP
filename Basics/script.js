//   gsap.to
//    gsap.from


// gsap.to("#box1", {
//     x: 700, 
//     duration: 3,
//     rotate:-360,
//     backgroundColor: "blue",
//     borderRadius:"50%",
//     scale:"0.5"
//     // delay:2,

// });

// gsap.from("#box2", {
//     x: 700,
//     y:-80, 
//     duration: 3,
//     rotate:360
   
// });


// gsap.from("h1", {
//     // color:"red",
//     opacity:0,
//     duration:2,
//     delay:1,
//     y:50,

//     //strager-->
//     stagger:1
// })


// gsap.to(".box", {
//     backgroundColor:"white",
//     duration:2,
//     y:-100,
//     rotate:180,
//     borderRadius:"20%",

//     //new feature
//     repeat:1,
//     yoyo:true,
    
// })




//-----------------------------------------------------timeline---------->>
    // initially we were doing it like this--
        // gsap.to('#box1',{
        //     x:800,
        //     rotate:360,
        //     duration:1.5,
        //     delay:1
        // })
        // gsap.to('#box2',{
        //     x:800,
        //     backgroundColor:"white",
        //     // rotate:360,
        //     duration:1.5,
        //     delay:2.5
        // })
        // gsap.to('#box3',{
        //     x:800,
        //     borderRadius:"50%",
        //     scale:0.5,
        //     duration:1.5,
        //     delay:4
        // })

    // -------------and now using timeline--------------
    var tl = gsap.timeline()  
    
    tl.to('#box1',{
        x:800,
        rotate:360,
        duration:1.5,
        delay:1
    })
    tl.to('#box2',{
        x:800,
        duration:1.5,
        // delay:2.5      ------no need to apply delay here--- this will be handled by the timeline
    })
    tl.to('#box3',{
        x:800,
        duration:1.5,
        // delay:2.5      ------no need to apply delay here
    })



//---------------------------------------------------------------------------------------

// lets work with a small animation in navbar 

var tl = gsap.timeline();

tl.from('h2',{
    y: -30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from('#part2 h4',{
    y: -30,
    opacity:0,
    duration:1,
    stagger:0.3
    
})

tl.from('h1',{
    y: 30,
    opacity:0,
    duration:0.5,
    scale:0.2
    
})