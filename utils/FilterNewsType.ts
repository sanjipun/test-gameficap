export const FilterNewsType = (Arr: [], value: string) => {
    return Arr?.filter((data: { id: string, name: string }) => data.name === value)
}