import Image from "next/image";

const PatternBg = () => {
  return (
    <figure className="absolute -top-10 -left-10 -right-10 sm:-left-20 -z-10">
      <Image
        src="/images/pattern-bg.svg"
        alt="background-pattern"
        width={650}
        height={650}
        priority
      />
    </figure>
  );
};

export default PatternBg;
