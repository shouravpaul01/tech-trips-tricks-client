import { Radio } from "@nextui-org/radio";
import { cn } from "@nextui-org/theme";

export const RadioInputCustom = (props:any) => {
    const {children, ...otherProps} = props;
  
    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-full gap-4 p-1 border-2 border-transparent",
            "data-[selected=true]:border-secondary"
          ),
        }}
      >
        {children}
      </Radio>
    );
  };
  