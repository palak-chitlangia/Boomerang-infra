import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <InlineWidget
      url="https://calendly.com/theboomerang/15-min-discovery-call?hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1"
      styles={{
        height: "700px",
        width: "100%",
      }}
    />
  );
};

export default CalendlyWidget;
