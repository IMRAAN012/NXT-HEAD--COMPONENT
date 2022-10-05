import Header from "../components/Header"
import Head  from "next/head"



function About(){
    return(
        <>
        <Head>
        <title> CODE</title>
        <meta name=" COMPONENT" content="IMRAAN"/>
        </Head>
        <div className='content'>About</div>
        
        
        </>

    ) 
}
export default About

About.getLayout = function PageLayout(Page){
    return(
        <>
        <Header />
        {Page}
        
        </>
    )
}