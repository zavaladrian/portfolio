
export default function Loading() {
    return (
      <section className="text-slat-100 overflow-hidden bg-gradient-to-t from-glacier to-antwhite px-8 py-24 tablet:px-12 tablet:py-40 laptop:py-60 h-auto w-auto dark:bg-slate-800 dark:bg-none">
      <div className="relative mx-auto max-w-5xl">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-300 rounded-md dark:bg-slate-700 mb-5 tablet:h-16"></div>
          <div className="h-10 bg-slate-300 rounded-md dark:bg-slate-700 mb-4 tablet:h-14"></div>
          <div className="h-8 bg-slate-300 rounded-md dark:bg-slate-700 max-w-xl tablet:h-10"></div>
          <div className="flex flex-row space-x-5 my-8 tablet:my-0 tablet:pt-2">
            <div className="h-12 w-36 bg-slate-300 rounded-lg dark:bg-slate-700"></div>
            <div className="h-12 w-36 bg-slate-300 rounded-lg dark:bg-slate-700"></div>
          </div>
        </div>
      </div>
    </section>
)
  }

  