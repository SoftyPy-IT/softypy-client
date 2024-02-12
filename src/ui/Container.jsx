

const Container = ({children}) => {
    return (
        <div className='"px-[20px] w-full max-w-[1200px] mx-auto lg:px-5 px-3 sm:px-3'>
            {children}
        </div>
    );
};

export default Container;