export function useCounter(initalValue: number) {
    const count = ref (initalValue);
    const inc = () => (count.value = count.value + 1);
    const dec = () => (count.value = count.value -1 );
    return {
        count,
        inc,
        dec
    };
}