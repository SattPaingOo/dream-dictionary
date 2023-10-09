const About = () => {
    return (
        <div className="max-w-[1440px] md:p-14 p-3 md:pt-[100px] pt-[60px] p-auto m-auto min-h-[calc(100vh-50px)]">
            <div className="max-w-[600px] p-auto m-auto md:mt-12 mt-9 md:leading-9 leading-8 md:text-lg text-center">
                ကျွန်တော်တို့ လူသားများဟာ နေ့စဉ်အိပ်စက်ဖို့ လိုအပ်ပါတယ်။
                အိပ်စက်နေစဉ် အတောအတွင်းမှာ အိမ်မက်တွေမက်မြင်ကြရပါတယ်။
                ထိုအိမ်မက်တွေနဲ့ ပတ်သတ်ပြီး အကောင်း အဆိုး သိမြင်‌နိုင်စေရန် အတွက် အိမ်မက် အဘိဓာန် website လေးကို ရေးသားလိုက်ပါတယ်။

                ယခု website တွင် ဖော်ပြထားသော အကြောင်းအရာများသည် မူရင်းရေးသားထားသူများထံမှ ကူးယူဖော်ပြထားခြင်းဖြစ်ပါသည်။
                <div>မူရင်းရေးသားထားသူများကို Credit ပေးပါတယ်။</div>
                <div className="mt-12 font-bold">Project Details</div>
                <div>Langauge : React + Tailwind</div>
                <div>GitHub Link : &nbsp;
                    <a href="https://github.com/SattPaingOo/dream-dictionary" className="text-blue-600">
                        https://github.com/SattPaingOo/dream-dictionary
                    </a>
                </div>
                <div>Special Thanks to bro <span className="text-blue-600">Sann Lynn Htun</span> for Project Idea && data support .</div>
            </div>
        </div>
    );
}

export default About;