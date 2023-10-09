const Hero = () => {
    return (
        <div className="bg-[url('..\public\img\hero-background.jpg')] bg-center md:h-[420px] h-[300px] p-3 flex justify-center items-center">
            <div>
                <div className="md:text-3xl text-xl text-center font-medium leading-9">
                    သင်မက်ခဲ့တဲ့ <span className="text-blue-600 font-bold">အိမ်မက် </span>အကြောင်း နဲ့ပတ်သတ်ပြီး သိချင်နေပြီမလား
                </div>
                <div className="md:text-3xl text-xl md:pt-8 pt-6 text-center font-medium">အခုပဲ <span className="text-blue-600 font-bold">ရှာဖွေလိုက်ပါ</span></div>
            </div>
        </div>
    )
}

export default Hero;