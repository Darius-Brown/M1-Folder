function foo1()
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return
    {
        bar: "hello"
    };
}

//why does this return the same thing?