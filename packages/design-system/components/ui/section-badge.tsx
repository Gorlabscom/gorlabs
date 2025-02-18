interface Props {
  title: string;
}

export const SectionBadge = ({ title }: Props) => {
  return (
    <div className='relative inline-flex h-8 select-none overflow-hidden rounded-full p-[1.5px] focus:outline-none'>
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]" />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 font-medium text-sm text-zinc-950 backdrop-blur-3xl dark:bg-slate-950 dark:text-white'>
        {title}
      </span>
    </div>
  );
};

// export default SectionBadge;
