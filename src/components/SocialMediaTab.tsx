export const SocialMediaTab = ({
  socialMedia,
}: {
  socialMedia: {
    logo: string;
    text: string;
  }[];
}) => {
  return (
    <div className="space-y-3">
      {socialMedia.map((post, index) => (
        <div
          key={index}
          className="flex items-start gap-3 bg-white p-3 rounded-2xl hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        >
          <div className="flex items-start gap-3">
            <img src="/Quotes.svg" alt="Social media post quote" />
            <div>
              <p>{post.text}</p>
              <div className="flex justify-end mt-2">
                <div className="flex items-center justify-center bg-[#EBF0FF] p-[3.2px] h-8 w-8 rounded-full cursor-pointer hover:bg-[#D6E4FF] hover:scale-110 active:scale-95 transition-all duration-200">
                  <img src={post.logo} alt="Social media platform icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
