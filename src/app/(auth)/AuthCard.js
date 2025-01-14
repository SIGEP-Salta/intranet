const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 w-2/3">
        <div>{logo}</div>

        <div className="w-full mt-6 px-6 py-4 bg-white overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
