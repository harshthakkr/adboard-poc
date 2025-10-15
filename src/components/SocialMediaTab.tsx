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
          className="flex items-start gap-3 bg-white p-3 rounded-2xl"
        >
          <div className="flex items-start gap-3">
            <img src="/Quotes.svg" alt="Quotes" />
            <div>
              <p>{post.text}</p>
              <div className="flex justify-end mt-2">
                <div className="flex items-center justify-center bg-[#EBF0FF] p-[3.2px] h-8 w-8 rounded-full">
                  <img src={post.logo} alt="Social Media" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
