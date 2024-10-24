
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { CheckIcon } from '../icons'
import { useCheckbox } from '@nextui-org/checkbox'
import { tv } from '@nextui-org/theme'
import { Chip } from '@nextui-org/chip'
const checkbox = tv({
    slots: {
      base: "border-default hover:bg-default-200",
      content: "text-default-500"
    },
    variants: {
      isSelected: {
        true: {
          base: "border-secondary bg-secondary hover:bg-secondary hover:border-secondary",
          content: "text-primary-foreground pl-1"
        }
      },
      isFocusVisible: {
        true: { 
          base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
        }
      }
    }
  })
  
 
  export const CustomCheckbox = (props:any) => {
    const {
      children,
      isSelected,
      isFocusVisible,
      getBaseProps,
      getLabelProps,
      getInputProps,
    } = useCheckbox({
      ...props
    })
  
    const styles = checkbox({ isSelected, isFocusVisible })
  
    return (
      <label {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Chip  
          classNames={{
            base: styles.base(),
            content: styles.content(),
          }}
          color="secondary"
          startContent={isSelected ? <CheckIcon  fill='#FFFFFF' className="ml-1" /> : null}
          variant="faded"
         
        >
        
        {children ? children : isSelected ? "Enabled" : "Disabled"}
       
        </Chip>
      </label>
    );
  }