
interface AuthFormProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    buttonText: string;
    redirectText: string;
    redirectLinkText: string;
}

export const AuthForm = ({children, title, subtitle, buttonText, redirectText, redirectLinkText}: AuthFormProps) => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900 px-4">
        <div className="w-full max-w-md bg-neutral-700 rounded-2xl shadow-xl p-6 sm:p-8 text-amber-50">
          <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
          <p className="text-center text-sm font-light mb-6">{subtitle}</p>

          <form className="flex flex-col gap-4">
            {children}
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white py-3 rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {buttonText}
            </button>

            <p className="text-center text-sm mt-2">
              {redirectText}{" "}
              <a href={redirectLinkText} className="text-violet-400 hover:underline">{redirectLinkText}</a>
            </p>
          </form>
        </div>
      </div>
  )
}

