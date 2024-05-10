


const InfoKalit = () => {
    return (
      <div className="py-10">
        <h1 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center py-3 px-2 sm:px-6 md:px-12 lg:px-20">
          About Kaliti
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-2 sm:mx-4">
          <div className="px-2 sm:px-3 bg-secondary py-12 lg:px-6">
            <p className="text-footer text-start font-semibold text-[24px] mb-5">
            Addis Ababa&apos;s Thriving Akaki Kality
            </p>
            <p className="font-normal text-[16px]">
            Kaliti is characterized by its significant industrial presence, rapid urbanization, and diverse population. Located in the southern part of Addis Ababa, Kaliti offers a mix of residential neighborhoods, commercial centers, and industrial zones. Despite facing challenges such as limited access to municipal services and sub-standard housing, Kaliti is a vibrant and dynamic area with immense potential for real estate investment and development.
            </p>
          </div>
          <div>
          <iframe
              title="Eldana Spring Homes Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.546367742884!2d38.76487527426378!3d8.921694491135387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b83634475d515%3A0xb32dbcddff38da0c!2sKaliti!5e0!3m2!1sam!2set!4v1715322152229!5m2!1sam!2set"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl w-full"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoKalit;
  